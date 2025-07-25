import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';

const requireAuth = (Component: React.ComponentType) => {
  return () => {
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
    
    if (!isAuthenticated) {
      return <Navigate to="/" replace />;
    }
    
    return <Component />;
  };
};

export default requireAuth;
