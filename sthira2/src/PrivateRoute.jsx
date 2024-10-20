import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element }) => {
  const { token } = useAuth(); // Accessing token from useAuth

  return token ? element : <Navigate to="/Login" />;
};

export default PrivateRoute;
