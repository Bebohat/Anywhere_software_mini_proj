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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Placeholder user info
  const user = { name: 'John Smith' };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="layout">
      <button className="sidebar-toggle" onClick={() => setSidebarOpen((v) => !v)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <aside className={`sidebar coligo-sidebar${sidebarOpen ? ' open' : ''}`} onClick={() => setSidebarOpen(false)}>
        <Sidebar />
      </aside>
      <main className="main-content coligo-dashboard-main">
        <header className="coligo-dashboard-header">
          <div className="coligo-header-left">
            <h2 className="coligo-welcome">Welcome {user.name},</h2>
            <div className="coligo-header-sub">Here's what's happening with your courses today</div>
          </div>
          <div className="coligo-header-right">
            <div className="coligo-search-container">
              <input 
                type="text" 
                placeholder="Search courses, assignments..." 
                className="coligo-search-input"
              />
              <span className="coligo-search-icon">🔍</span>
            </div>
            <div className="coligo-notifications">
              <span className="coligo-notification-icon">📧</span>
              <span className="coligo-notification-icon">🔔</span>
            </div>
            <div className="coligo-user-section">
              <span className="coligo-header-avatar">JS</span>
              <button onClick={handleLogout} className="coligo-logout-btn">{t('Logout')}</button>
            </div>
          </div>
        </header>
        
        <div className="coligo-dashboard-content">
          <div className="coligo-dashboard-grid">
            <section className="coligo-card coligo-exams-card">
              <div className="coligo-card-header">
                <h3 className="coligo-card-title">EXAMS TIME</h3>
              </div>
              <div className="coligo-card-content">
                <p className="coligo-exams-text">
                  Here we are, Are you ready to fight? Don't worry, we prepared some tips to be ready for your exams.
                </p>
                <p className="coligo-exams-quote">
                  "Education is not the learning of facts, but the training of the mind to think." - Albert Einstein
                </p>
                <button className="coligo-primary-button">View exams tips</button>
              </div>
            </section>

            <section className="coligo-card coligo-announcements-card">
              <div className="coligo-card-header">
                <h3 className="coligo-card-title">Announcements</h3>
                <a href="#" className="coligo-view-all">All</a>
              </div>
              <div className="coligo-card-content">
                <AnnouncementList />
              </div>
            </section>

            <section className="coligo-card coligo-due-card">
              <div className="coligo-card-header">
                <h3 className="coligo-card-title">What's due</h3>
                <a href="#" className="coligo-view-all">All</a>
              </div>
              <div className="coligo-card-content">
                <QuizList />
              </div>
            </section>
          </div>

          <section className="coligo-actions-section">
            <button className="coligo-action-btn" onClick={() => setShowAnnouncementForm(!showAnnouncementForm)}>
              {showAnnouncementForm ? t('Hide Add Announcement') : t('Add Announcement')}
            </button>
            {showAnnouncementForm && (
              <div className="coligo-form-card">
                <h2>{t('Post New Announcement')}</h2>
                <AnnouncementForm />
              </div>
            )}
            <button className="coligo-action-btn" onClick={() => setShowQuizForm(!showQuizForm)}>
              {showQuizForm ? t('Hide Add Quiz') : t('Add Quiz')}
            </button>
            {showQuizForm && (
              <div className="coligo-form-card">
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
