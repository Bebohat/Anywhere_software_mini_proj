import React from 'react';
import QuizList from '../components/QuizList';

const QuizzesPage: React.FC = () => {
  return (
    <div className="container">
      <h1>All Quizzes</h1>
      <QuizList />
    </div>
  );
};

export default QuizzesPage;
