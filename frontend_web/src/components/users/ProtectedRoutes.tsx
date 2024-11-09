// src/components/ProtectedRoutes.js
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

interface ProtectedRoutesProps {
  isAuthenticated: boolean;
}

const UserProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/user/login" replace />;
};

export default UserProtectedRoutes;
