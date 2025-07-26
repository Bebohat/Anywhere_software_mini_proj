import React from 'react';
import QuizList from '../components/QuizList';
import Sidebar from '../components/Sidebar';

const QuizzesPage: React.FC = () => {
  return (
    <div className="layout">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="main-content coligo-page-main">
        <header className="coligo-page-header">
          <div className="coligo-page-title-section">
            <h1 className="coligo-page-title">Quizzes</h1>
            <p className="coligo-page-subtitle">Test your knowledge and track your progress</p>
          </div>
        </header>
        <div className="coligo-page-content">
          <div className="coligo-content-card">
            <QuizList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizzesPage;
