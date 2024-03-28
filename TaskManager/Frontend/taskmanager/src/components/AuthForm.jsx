import React, { useState } from 'react';
import '../styles/Authform.css';

const AuthForm = ({ type, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <div className="form-container">
      <h2 className="form-title">{type}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="form-button">Submit</button><br />
          <a href="#" className="form-link">Forgot password?</a>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
