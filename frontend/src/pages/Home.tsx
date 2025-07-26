// src/pages/Home.tsx
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { login } from '../features/auth/authSlice';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="home-container">
      <div className="home-box">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome to the Student Dashboard</h1>
        {!isAuthenticated ? (
          <button
            onClick={() => dispatch(login())}
            className="home-button"
          >
            Log In
          </button>
        ) : (
          <Link to="/dashboard" className="home-button">
            Go to Dashboard
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
