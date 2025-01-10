import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Payment from '../pages/Payment';
import Admin from '../pages/Admin';
import Login from '../pages/Login';

const PrivateRoute = ({ children, requireAdmin = false }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (requireAdmin && userData.role !== 'admin') {
    return <Navigate to="/" />;
  }

  return children;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Payment />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/admin" 
          element={
            <PrivateRoute requireAdmin={true}>
              <Admin />
            </PrivateRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
