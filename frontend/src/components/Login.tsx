import React, { useState } from 'react';
import { LoginFormData } from '../types/customTypes';

interface LoginProps {
  onLogin?: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: ''
  });
  const [error, setError] = useState<string>('');

  const handleLogin = async () => {
    if (!formData.username || !formData.password) {
      setError('Please enter both username and password');
      return;
    }

    try {
      console.log('Logging in with:', formData);
      setError('');
      if (onLogin) {
        onLogin();
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter your username"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter your password"
        />
      </div>
      
      <button onClick={handleLogin}>Login</button>
      
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;