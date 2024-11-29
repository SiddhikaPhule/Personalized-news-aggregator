import React, { useState } from 'react';
import axios from 'axios';
import '../signupForm.css'; // Reusing the same CSS
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      const { data } = response;

      if (data && data.message === 'Login successful') {
        setSuccess('Login successful!');
        setError('');
      } else {
        setError('Invalid credentials');
        setSuccess('');
      }
    } catch (error: any) {
      setError('Error logging in: ' + (error.response?.data?.message || error.message));
      setSuccess('');
    }
  };

  return (
    <div className="signup-page-container">
      <div className="signup-header">
        <h2>Login Form</h2>
        <p>Sign in to your account</p>
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {success && <div className="success-message">{success}</div>}
      {error && <div className="error-message">{error}</div>}
      <div className="login-link-container">
        Don’t have an account? <Link to="/signup">Sign up here</Link>.
      </div>
    </div>
  );
};

export default LoginForm;
