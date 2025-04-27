import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) navigate('/profile');
  };

  return (
    <div className="screen-container">
      <div className="card">
        <h1>Signin to your PopX account</h1>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email address"  value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input  type="password"      placeholder="Enter password"     value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn primary" onClick={handleLogin}>
          Login </button>
      </div>
    </div>
  );
}