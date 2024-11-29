import React, { useState } from 'react';
import axios from 'axios';
import '../signupForm.css';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/signup', { email, password });
      const { data } = response;

      if (data && data.uid) {
        setSuccess(`User created successfully with UID: ${data.uid}`);
        setError('');
      }
    } catch (error: any) {
      setError('Error creating user: ' + (error.response?.data?.message || error.message));
      setSuccess('');
    }
  };

  return (
    <div className="signup-page-container">
      <div className="signup-header">
        <h2>Signup Form</h2>
        <p>Create a new account</p>
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
        <button type="submit">Sign Up</button>
      </form>
      {success && <div className="success-message">{success}</div>}
      {error && <div className="error-message">{error}</div>}
      <div className="login-link-container">
        Already have an account? <Link to="/login">Login here</Link>.
      </div>
    </div>
  );
};

export default SignupForm;
