// src/components/QuizList.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchQuizzes, deleteQuiz } from '../features/quizzes/quizSlice';
import type { Quiz, Question } from '../features/quizzes/quizSlice';

const QuizList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { quizzes, loading, error } = useAppSelector((state) => state.quizzes);

  useEffect(() => {
    dispatch(fetchQuizzes());
  }, [dispatch]);

  if (loading) return <p>Loading quizzes...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div className="quiz-list">
      {quizzes.map((quiz: Quiz) => (
        <div key={quiz._id} className="quiz-card">
          <div className="flex justify-between items-center mb-2">
            <h3 className="quiz-question">{quiz.course_name}</h3>
            <button
              onClick={() => dispatch(deleteQuiz(quiz._id))}
              className="text-sm text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>

          <div className="space-y-3">
            {quiz.questions.map((q: Question, index: number) => {
              const answers = [q.answer1, q.answer2, q.answer3, q.answer4];
              return (
                <div key={index} className="bg-gray-100 p-3 rounded">
                  <p className="font-medium mb-1">Q{index + 1}: {q.questionText}</p>
                  <ul className="list-disc ml-6 text-sm text-gray-800">
                    {answers.map((ans, i) => (
                      <li
                        key={i}
                        className={
                          ans === q.correctAnswer
                            ? 'font-semibold text-green-600'
                            : ''
                        }
                      >
                        {ans}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizList;
