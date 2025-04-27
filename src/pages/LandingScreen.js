import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function LandingScreen() {
  const navigate = useNavigate();

  return (
    <div className="screen-container">
      <div className="card">
        <h1>Welcome to PopX</h1>
        <p className="description">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.</p>
        <button className="btn primary" onClick={() => navigate('/signup')}>
          Create Account</button>

        <button className="btn secondary" onClick={() => navigate('/login')}>
          Already Registered? Login   </button>


          
      </div>
    </div>
  );
}