// src/components/QuizList.tsx
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchQuizzes, deleteQuiz } from '../features/quizzes/quizSlice';
import type { Quiz, Question } from '../features/quizzes/quizSlice';

const QuizList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { quizzes, loading, error } = useAppSelector((state) => state.quizzes);
  const [expandedQuizzes, setExpandedQuizzes] = useState<Set<string>>(new Set());

  useEffect(() => {
    dispatch(fetchQuizzes());
  }, [dispatch]);

  const toggleQuiz = (quizId: string) => {
    const newExpanded = new Set(expandedQuizzes);
    if (newExpanded.has(quizId)) {
      newExpanded.delete(quizId);
    } else {
      newExpanded.add(quizId);
    }
    setExpandedQuizzes(newExpanded);
  };

  if (loading) return <p>Loading quizzes...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div className="quiz-list coligo-quiz-list">
      {quizzes.map((quiz: Quiz, index: number) => {
        const colors = ['coligo-yellow-item', 'coligo-blue-item', 'coligo-purple-item'];
        const colorClass = colors[index % colors.length];
        const isExpanded = expandedQuizzes.has(quiz._id);
        
        return (
          <div key={quiz._id} className={`quiz-card coligo-card-item ${colorClass}`}>
            <div className="coligo-item-icon" onClick={() => toggleQuiz(quiz._id)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <path d="M12 17h.01"/>
              </svg>
            </div>
            <div className="coligo-item-content" onClick={() => toggleQuiz(quiz._id)}>
              <h4 className="coligo-item-title">{quiz.course_name}</h4>
              <p className="coligo-item-course">Course • {quiz.questions.length} questions</p>
            </div>
            <div className="coligo-item-actions">
              <span className={`coligo-item-arrow ${isExpanded ? 'expanded' : ''}`}>→</span>
              <button
                onClick={() => dispatch(deleteQuiz(quiz._id))}
                className="coligo-delete-btn"
              >
                Delete
              </button>
            </div>
            
            {isExpanded && (
              <div className="coligo-quiz-questions">
                {quiz.questions.map((q: Question, qIndex: number) => {
                  const answers = [q.answer1, q.answer2, q.answer3, q.answer4];
                  return (
                    <div key={qIndex} className="coligo-question-item">
                      <h5 className="coligo-question-title">Q{qIndex + 1}: {q.questionText}</h5>
                      <div className="coligo-answers">
                        {answers.map((ans, aIndex) => (
                          <div 
                            key={aIndex} 
                            className={`coligo-answer ${ans === q.correctAnswer ? 'correct' : ''}`}
                          >
                            <span className="coligo-answer-letter">{String.fromCharCode(65 + aIndex)}.</span>
                            <span className="coligo-answer-text">{ans}</span>
                            {ans === q.correctAnswer && <span className="coligo-correct-badge">✓</span>}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default QuizList;
