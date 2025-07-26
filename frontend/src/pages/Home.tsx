// src/pages/Home.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { login } from '../features/auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  // Redirect authenticated users to dashboard
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = () => {
    dispatch(login());
    navigate('/dashboard');
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
        <button
          onClick={handleLogin}
          className="home-button coligo-primary-btn"
        >
          {t('login')}
        </button>
      </div>
    </div>
  );
};

export default Home;
