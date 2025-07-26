import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const location = useLocation();
  return (
    <nav className="sidebar coligo-sidebar">
      <div className="sidebar-header">
        <span className="sidebar-logo">🎓</span>
        <span className="sidebar-title">Coligo LMS</span>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-section-title">MAIN</div>
        <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
          <span className="sidebar-icon">🏠</span> Dashboard
        </Link>
        <Link to="/announcements" className={location.pathname === '/announcements' ? 'active' : ''}>
          <span className="sidebar-icon">📢</span> Announcements
        </Link>
        <Link to="/quizzes" className={location.pathname === '/quizzes' ? 'active' : ''}>
          <span className="sidebar-icon">📝</span> Quizzes
        </Link>
      </div>
      <div className="sidebar-section sidebar-section-bottom">
        <div className="sidebar-section-title">ACCOUNT</div>
        <Link to="/profile">
          <span className="sidebar-icon">👤</span> Profile
        </Link>
        <Link to="/settings">
          <span className="sidebar-icon">⚙️</span> Settings
        </Link>
        <Link to="/help">
          <span className="sidebar-icon">❓</span> Help Center
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
