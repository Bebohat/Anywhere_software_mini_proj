import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Announcement {
  _id: string;
  userName: string;
  content: string;
  createdAt: string;
}

interface AnnouncementState {
  list: Announcement[];
  loading: boolean;
  error: string | null;
}

const initialState: AnnouncementState = {
  list: [], // ✅ fixed typo from Announcements to list
  loading: false,
  error: null,
};

// Helpers
const getErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || 'Server error';
  }
  return 'An unexpected error occurred';
};

// Thunks
export const fetchAnnouncements = createAsyncThunk<Announcement[], void, { rejectValue: string }>(
  'announcements/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/announcements');
      return res.data.announcements;
    } catch (err) {
      return thunkAPI.rejectWithValue(getErrorMessage(err));
    }
  }
);

export const createAnnouncement = createAsyncThunk<
  Announcement,
  { userName: string; content: string },
  { rejectValue: string }
>('announcements/create', async (data, thunkAPI) => {
  try {
    const res = await axios.post('/api/announcements', data);
    return res.data.newAnnouncement;
  } catch (err) {
    return thunkAPI.rejectWithValue(getErrorMessage(err));
  }
});

export const deleteAnnouncement = createAsyncThunk<string, string, { rejectValue: string }>(
  'announcements/delete',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/api/announcements/${id}`);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(getErrorMessage(err));
    }
  }
);

// Slice
const announcementSlice = createSlice({
  name: 'announcements',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnnouncements.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnnouncements.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload; // ✅ renamed
      })
      .addCase(fetchAnnouncements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Unknown error';
      })
      .addCase(createAnnouncement.fulfilled, (state, action) => {
        state.list.unshift(action.payload); // ✅ renamed
      })
      .addCase(deleteAnnouncement.fulfilled, (state, action) => {
        state.list = state.list.filter((a) => a._id !== action.payload); // ✅ renamed
      });
  },
});

export default announcementSlice.reducer;
