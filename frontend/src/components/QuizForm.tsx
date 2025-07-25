import React, { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { createQuiz } from '../features/quizzes/quizSlice';

const emptyQuestion = {
  questionText: '',
  answer1: '',
  answer2: '',
  answer3: '',
  answer4: '',
  correctAnswer: '',
};

const QuizForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [courseName, setCourseName] = useState('');
  const [questions, setQuestions] = useState([ { ...emptyQuestion } ]);

  const handleQuestionChange = (index: number, field: string, value: string) => {
    const updated = [...questions];
    updated[index] = { ...updated[index], [field]: value };
    setQuestions(updated);
  };

  const addQuestion = () => {
    setQuestions([...questions, { ...emptyQuestion }]);
  };

  const removeQuestion = (index: number) => {
    const updated = [...questions];
    updated.splice(index, 1);
    setQuestions(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseName.trim() || questions.length === 0) return;

    const valid = questions.every(q =>
      q.questionText && q.answer1 && q.answer2 && q.answer3 && q.answer4 && q.correctAnswer &&
      [q.answer1, q.answer2, q.answer3, q.answer4].includes(q.correctAnswer)
    );
    if (!valid) return alert('Please fill all fields and ensure correctAnswer matches one of the 4 answers.');

    dispatch(createQuiz({ course_name: courseName.trim(), questions }));
    setCourseName('');
    setQuestions([{ ...emptyQuestion }]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-semibold">Course Name</label>
        <input
          type="text"
          value={courseName}
          onChange={e => setCourseName(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      {questions.map((q, i) => (
        <div key={i} className="border p-4 rounded shadow-sm space-y-2">
          <label className="font-medium">Question {i + 1}</label>
          <input
            type="text"
            value={q.questionText}
            onChange={e => handleQuestionChange(i, 'questionText', e.target.value)}
            placeholder="Question text"
            className="w-full border p-2 rounded"
            required
          />
          {[1, 2, 3, 4].map(n => (
            <input
              key={n}
              type="text"
              value={q[`answer${n}` as keyof typeof q]}
              onChange={e => handleQuestionChange(i, `answer${n}`, e.target.value)}
              placeholder={`Answer ${n}`}
              className="w-full border p-2 rounded"
              required
            />
          ))}
          <input
            type="text"
            value={q.correctAnswer}
            onChange={e => handleQuestionChange(i, 'correctAnswer', e.target.value)}
            placeholder="Correct answer (must match one of the 4 above)"
            className="w-full border p-2 rounded"
            required
          />
          <button
            type="button"
            onClick={() => removeQuestion(i)}
            className="text-sm text-red-500 mt-2"
            disabled={questions.length === 1}
          >
            Remove Question
          </button>
        </div>
      ))}

      <div className="flex gap-4">
        <button type="button" onClick={addQuestion} className="bg-blue-500 text-white px-4 py-2 rounded">
          + Add Question
        </button>
        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded">
          Submit Quiz
        </button>
      </div>
    </form>
  );
};

export default QuizForm;
