// src/pages/Dashboard.tsx
import React, { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { logout } from '../features/auth/authSlice';
import AnnouncementForm from '../components/AnnouncementForm';
import AnnouncementList from '../components/AnnouncementList';
import QuizForm from '../components/QuizForm';
import QuizList from '../components/QuizList';
import Sidebar from '../components/Sidebar';
import { useTranslation } from 'react-i18next';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [showAnnouncementForm, setShowAnnouncementForm] = useState(false);
  const [showQuizForm, setShowQuizForm] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="layout">
      <aside className="sidebar">
        <Sidebar />
      </aside>

      <main className="main-content">
        <header className="dashboard-header">
          <h1>{t('Dashboard')}</h1>
          <button onClick={handleLogout} className="btn danger">
            {t('Logout')}
          </button>
        </header>

        <section className="dashboard-section">
          <button
            className="btn toggle"
            onClick={() => setShowAnnouncementForm(!showAnnouncementForm)}
          >
            {showAnnouncementForm ? t('Hide Add Announcement') : t('Add Announcement')}
          </button>
          {showAnnouncementForm && (
            <div className="card">
              <h2>{t('Post New Announcement')}</h2>
              <AnnouncementForm />
            </div>
          )}
        </section>

        <section className="dashboard-section">
          <h2>{t('Announcements')}</h2>
          <AnnouncementList />
        </section>

        <section className="dashboard-section">
          <button
            className="btn toggle"
            onClick={() => setShowQuizForm(!showQuizForm)}
          >
            {showQuizForm ? t('Hide Add Quiz') : t('Add Quiz')}
          </button>
          {showQuizForm && (
            <div className="card">
              <h2>{t('Create New Quiz')}</h2>
              <QuizForm />
            </div>
          )}
        </section>

        <section className="dashboard-section">
          <h2>{t('All Quizzes')}</h2>
          <QuizList />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
