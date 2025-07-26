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

  // Placeholder user info
  const user = { name: 'John Smith' };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="layout">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="main-content coligo-dashboard-main">
        <header className="coligo-dashboard-header">
          <div className="coligo-header-left">
            <h2 className="coligo-welcome">Welcome back, {user.name}!</h2>
            <div className="coligo-header-sub">Here's what's happening with your courses today</div>
          </div>
          <div className="coligo-header-right">
            <span className="coligo-header-icon">📧</span>
            <span className="coligo-header-icon">🔔</span>
            <span className="coligo-header-avatar">JS</span>
            <button onClick={handleLogout} className="btn danger coligo-logout">{t('Logout')}</button>
          </div>
        </header>
        <div className="coligo-dashboard-grid">
          <section className="coligo-card coligo-due">
            <div className="coligo-card-title">What's Due</div>
            {/* You can map your due items here, for now show Announcements/Quizzes as example */}
            <AnnouncementList />
          </section>
          <section className="coligo-card coligo-upcoming">
            <div className="coligo-card-title">Upcoming Quizzes</div>
            <QuizList />
          </section>
          <section className="coligo-card coligo-actions">
            <div className="coligo-card-title">Quick Actions</div>
            <button className="btn toggle coligo-action-btn" onClick={() => setShowAnnouncementForm(!showAnnouncementForm)}>
              {showAnnouncementForm ? t('Hide Add Announcement') : t('Add Announcement')}
            </button>
            {showAnnouncementForm && (
              <div className="card">
                <h2>{t('Post New Announcement')}</h2>
                <AnnouncementForm />
              </div>
            )}
            <button className="btn toggle coligo-action-btn" onClick={() => setShowQuizForm(!showQuizForm)}>
              {showQuizForm ? t('Hide Add Quiz') : t('Add Quiz')}
            </button>
            {showQuizForm && (
              <div className="card">
                <h2>{t('Create New Quiz')}</h2>
                <QuizForm />
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
