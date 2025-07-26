// src/pages/Dashboard.tsx
import React, { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { logout } from '../features/auth/authSlice';
import AnnouncementForm from '../components/AnnouncementForm';
import AnnouncementList from '../components/AnnouncementList';
import QuizForm from '../components/QuizForm';
import QuizList from '../components/QuizList';
import Sidebar from '../components/Sidebar';
import LanguageSwitcher from '../components/LanguageSwitcher';
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
            <h2 className="coligo-welcome">{t('welcomeMessage')} {user.name},</h2>
            <div className="coligo-header-sub">{t('dashboardSubtitle')}</div>
          </div>
          <div className="coligo-header-right">
            <div className="coligo-search-container">
              <input 
                type="text" 
                placeholder={t('searchPlaceholder')}
                className="coligo-search-input"
              />
              <span className="coligo-search-icon">🔍</span>
            </div>
            <div className="coligo-notifications">
              <span className="coligo-notification-icon">📧</span>
              <span className="coligo-notification-icon">🔔</span>
            </div>
            <LanguageSwitcher />
            <div className="coligo-user-section">
              <span className="coligo-header-avatar">JS</span>
              <button onClick={handleLogout} className="coligo-logout-btn">{t('logout')}</button>
            </div>
          </div>
        </header>
        
        <div className="coligo-dashboard-content">
          <div className="coligo-dashboard-grid">
            <div className="coligo-card coligo-exams-card">
              <div className="coligo-card-content">
                <div className="coligo-exams-text">
                  "Education is not the learning of facts, but the training of the mind to think." - Albert Einstein
                </div>
                <div className="coligo-exams-quote">
                  Stay focused and keep learning!
                </div>
                <button className="coligo-primary-button">View exams tips</button>
              </div>
            </div>
          </div>

          <div className="coligo-dashboard-grid">
            <div className="coligo-card coligo-announcements-card">
              <div className="coligo-card-header">
                <h3 className="coligo-card-title">{t('announcements')}</h3>
                <a href="#" className="coligo-view-all">{t('viewAll')}</a>
              </div>
              <div className="coligo-card-content">
                <AnnouncementList />
              </div>
            </div>
            <div className="coligo-card coligo-due-card">
              <div className="coligo-card-header">
                <h3 className="coligo-card-title">{t('whatsDue')}</h3>
                <a href="#" className="coligo-view-all">{t('viewAll')}</a>
              </div>
              <div className="coligo-card-content">
                <QuizList />
              </div>
            </div>
          </div>

          <div className="coligo-actions-section">
            <button 
              onClick={() => setShowAnnouncementForm(!showAnnouncementForm)} 
              className="coligo-action-btn"
            >
              {t('addAnnouncement')}
            </button>
            <button 
              onClick={() => setShowQuizForm(!showQuizForm)} 
              className="coligo-action-btn"
            >
              {t('addQuiz')}
            </button>
          </div>

          {showAnnouncementForm && (
            <div className="coligo-form-card">
              <h2>{t('newAnnouncement')}</h2>
              <AnnouncementForm />
            </div>
          )}

          {showQuizForm && (
            <div className="coligo-form-card">
              <h2>{t('createQuiz')}</h2>
              <QuizForm />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
