import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Question {
  questionText: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  correctAnswer: string;
}

export interface Quiz {
  _id: string;
  course_name: string;
  questions: Question[];
  createdAt: string;
}

interface QuizState {
  quizzes: Quiz[];
  loading: boolean;
  error: string | null;
}

const initialState: QuizState = {
  quizzes: [],
  loading: false,
  error: null,
};

// === Thunks ===
export const fetchQuizzes = createAsyncThunk(
  'quizzes/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/quizzes');
      return res.data.quizzes;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || 'Failed to fetch quizzes');
      }
      return thunkAPI.rejectWithValue('Unknown error');
    }
  }
);

export const createQuiz = createAsyncThunk(
  'quizzes/create',
  async (data: { course_name: string; questions: Question[] }, thunkAPI) => {
    try {
      const res = await axios.post('/api/quizzes', data);
      return res.data.newQuiz;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || 'Failed to create quiz');
      }
      return thunkAPI.rejectWithValue('Unknown error');
    }
  }
);

export const deleteQuiz = createAsyncThunk(
  'quizzes/delete',
  async (id: string, thunkAPI) => {
    try {
      await axios.delete(`/api/quizzes/${id}`);
      return id;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || 'Failed to delete quiz');
      }
      return thunkAPI.rejectWithValue('Unknown error');
    }
  }
);

// === Slice ===
const quizSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchQuizzes.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuizzes.fulfilled, (state, action) => {
        state.loading = false;
        state.quizzes = action.payload;
      })
      .addCase(fetchQuizzes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createQuiz.fulfilled, (state, action) => {
        state.quizzes.unshift(action.payload);
      })
      .addCase(deleteQuiz.fulfilled, (state, action) => {
        state.quizzes = state.quizzes.filter(q => q._id !== action.payload);
      });
  },
});

export default quizSlice.reducer;
