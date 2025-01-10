import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Payment from '../pages/Payment';
import Admin from '../pages/Admin';
import Login from '../pages/Login';

// Rota protegida que requer autenticação
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

// Rota específica para admin
const AdminRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (userData.role !== 'admin') {
    return <Navigate to="/" />;
  }
  
  return children;
};

// Rota pública que redireciona usuários autenticados
const PublicRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');
  
  if (isAuthenticated) {
    if (userData.role === 'admin') {
      return <Navigate to="/admin" />;
    }
    return <Navigate to="/" />;
  }
  
  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rota de Login - Redireciona se já estiver autenticado */}
      <Route 
        path="/login" 
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } 
      />

      {/* Rota Admin - Apenas para administradores */}
      <Route 
        path="/admin" 
        element={
          <AdminRoute>
            <Admin />
          </AdminRoute>
        } 
      />

      {/* Rotas protegidas - Requer autenticação */}
      <Route 
        path="/" 
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } 
      />
      
      <Route 
        path="/payment" 
        element={
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        } 
      />

      {/* Redireciona qualquer outra rota para login */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
