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
    <div className="mt-6 space-y-6">
      {quizzes.map((quiz: Quiz) => (
        <div key={quiz._id} className="border p-4 rounded shadow-sm">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{quiz.course_name}</h3>
            <button
              onClick={() => dispatch(deleteQuiz(quiz._id))}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>

          <div className="mt-4 space-y-3">
            {quiz.questions.map((q: Question, index: number) => {
              const answers = [q.answer1, q.answer2, q.answer3, q.answer4];
              return (
                <div key={index} className="p-3 bg-gray-100 rounded">
                  <p className="font-medium">Q{index + 1}: {q.questionText}</p>
                  <ul className="list-disc ml-5 mt-1 text-sm text-gray-700">
                    {answers.map((ans, i) => (
                      <li key={i} className={ans === q.correctAnswer ? 'font-semibold text-green-600' : ''}>
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
