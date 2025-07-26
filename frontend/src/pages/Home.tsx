// src/pages/Home.tsx
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { login, logout } from '../features/auth/authSlice';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="home-container coligo-home">
      <div className="coligo-home-header">
        <div className="coligo-home-logo">
          <span className="coligo-logo-icon">🎓</span>
          <span className="coligo-logo-text">Coligo LMS</span>
        </div>
      </div>
      <div className="home-box coligo-welcome-card">
        <h1 className="coligo-welcome-title">{t('welcome')}</h1>
        <p className="coligo-welcome-subtitle">{t('welcomeSubtitle')}</p>
        {!isAuthenticated ? (
          <button
            onClick={handleLogin}
            className="home-button coligo-primary-btn"
          >
            {t('login')}
          </button>
        ) : (
          <>
            <Link to="/dashboard" className="home-button coligo-primary-btn" style={{ marginBottom: 12 }}>
              {t('dashboard')}
            </Link>
            <button
              onClick={handleLogout}
              className="home-button coligo-primary-btn"
              style={{ background: '#e74c3c', marginTop: 8 }}
            >
              {t('logout')}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
