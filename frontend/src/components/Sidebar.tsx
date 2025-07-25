import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  return (
    <nav className="sidebar">
      <Link to="/dashboard">{t('dashboardTitle')}</Link>
      <Link to="/announcements">{t('announcements')}</Link>
      <Link to="/quizzes">{t('allQuizzes')}</Link>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => switchLanguage('en')}>EN</button>
        <button onClick={() => switchLanguage('fr')}>FR</button>
      </div>
    </nav>
  );
};

export default Sidebar;
