import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import AuthForm from '../components/AuthForm';
import '../styles/login.css';

const Login = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('');

  const handleLogin = async credentials => {
    try {
      const response = await axios.post('https://taskmanager-9qtl.onrender.com/auth/login', credentials);
      console.log('Login response:', response.data);
      
      navigate('/home');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <AuthForm type="Login" onSubmit={handleLogin} />
        {error && <p className="error-message">{error}</p>}
        <p className="form-link">
          Don't have an account? <Link to="/register" className="form-link">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
