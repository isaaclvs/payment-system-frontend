import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', {
        user: formData
      });

      if (response.data.status.code === 200) {
        const userData = response.data.status.data.user;

        const token = response.headers['authorization']?.split(' ')[1];  // "Bearer <token>"

        if (token) {
          localStorage.setItem('token', token);
          localStorage.setItem('userData', JSON.stringify(userData));
          localStorage.setItem('isAuthenticated', 'true');

          if (userData.role === 'admin') {
            navigate('/admin');
          } else {
            navigate('/');
          }
        }
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Email ou senha inválidos' 
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white rounded-lg shadow-lg">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Login</h2>
      </div>
      
      <div className="p-6">
        {status.message && (
          <div className="mb-4 p-4 rounded-md bg-red-50 text-red-700 border border-red-200">
            {status.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-md transition duration-200"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login; 