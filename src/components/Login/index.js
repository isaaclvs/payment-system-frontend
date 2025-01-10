import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', {
        user: formData
      });

      if (response.data.status.code === 200) {
        localStorage.setItem('userData', JSON.stringify(response.data.status.data.user));
        localStorage.setItem('isAuthenticated', 'true');
        
        if (response.data.status.data.user.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      }
    } catch (error) {
      setError('Email ou senha inválidos');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login; 