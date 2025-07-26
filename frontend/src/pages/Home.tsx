// src/pages/Home.tsx
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { login } from '../features/auth/authSlice';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="home-container coligo-home">
      <div className="coligo-home-header">
        <div className="coligo-home-logo">
          <span className="coligo-logo-icon">🎓</span>
          <span className="coligo-logo-text">Coligo LMS</span>
        </div>
      </div>
      <div className="home-box coligo-welcome-card">
        <h1 className="coligo-welcome-title">Welcome to the Student Dashboard</h1>
        <p className="coligo-welcome-subtitle">Your gateway to learning excellence</p>
        {!isAuthenticated ? (
          <button
            onClick={() => dispatch(login())}
            className="home-button coligo-primary-btn"
          >
            Log In
          </button>
        ) : (
          <Link to="/dashboard" className="home-button coligo-primary-btn">
            Go to Dashboard
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
