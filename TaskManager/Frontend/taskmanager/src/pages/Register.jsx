import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import AuthForm from '../components/AuthForm';
import '../styles/register.css';

const Register = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('');

  const handleRegister = async userData => {
    try {
      const response = await axios.post('https://taskmanager-9qtl.onrender.com/auth/register', userData);
      console.log('Registration response:', response.data);
      
      navigate('/');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <AuthForm type="Register" onSubmit={handleRegister} />
        {error && <p className="error-message">{error}</p>}
        <p className="form-link">
          Already have an account? <Link to="/" className="form-link">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
