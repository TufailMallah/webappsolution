import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const location = useLocation();

  if (!token && location.pathname === '/dashboard') {
    return <Navigate to="/login" replace />;
  }

  return token ? children : <Navigate to="/dashboard" />;
};

export default PrivateRoute;
