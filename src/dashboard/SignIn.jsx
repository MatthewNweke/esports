// Login.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'your-login-api-endpoint',
        { email, password }
      );

      // Assuming successful login, save the token
      const token = response.data.token;
      // You can store the token in sessionStorage or localStorage
      sessionStorage.setItem('token', token);
      // Redirect to the dashboard or another page
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Login Error', error.response.data);
      // Handle login error, show error message to the user
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
