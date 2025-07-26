import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();
  
  return (
    <nav className="sidebar coligo-sidebar">
      <div className="sidebar-header">
        <span className="sidebar-logo">🎓</span>
        <span className="sidebar-title">Coligo LMS</span>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-section-title">{t('main')}</div>
        <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
          <span className="sidebar-icon">🏠</span> {t('dashboard')}
        </Link>
        <Link to="/announcements" className={location.pathname === '/announcements' ? 'active' : ''}>
          <span className="sidebar-icon">📢</span> {t('announcements')}
        </Link>
        <Link to="/quizzes" className={location.pathname === '/quizzes' ? 'active' : ''}>
          <span className="sidebar-icon">📝</span> {t('quizzes')}
        </Link>
      </div>
      <div className="sidebar-section sidebar-section-bottom">
        <div className="sidebar-section-title">{t('account')}</div>
        <Link to="/profile">
          <span className="sidebar-icon">👤</span> {t('profile')}
        </Link>
        <Link to="/settings">
          <span className="sidebar-icon">⚙️</span> {t('settings')}
        </Link>
        <Link to="/help">
          <span className="sidebar-icon">❓</span> {t('helpCenter')}
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
