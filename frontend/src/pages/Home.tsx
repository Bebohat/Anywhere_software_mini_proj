  // Home.tsx
  import React from 'react';
  import { useAppDispatch, useAppSelector } from '../hooks';
  import { login } from '../features/auth/authSlice';
  import { Link } from 'react-router-dom';

  const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

    return (
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>
        {!isAuthenticated ? (
          <button
            onClick={() => dispatch(login())}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Log In
          </button>
        ) : (
          <Link to="/dashboard" className="text-blue-600 underline">
            Go to Dashboard
          </Link>
        )}
      </div>
    );
  };

  export default Home;
