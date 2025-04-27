import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function SignupScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: false
  });

  return (
    <div className="screen-container">
      <div className="card">
        <h1>Create your<br />PopX account</h1>

        <div className="form-group">
          <label>Full Name*</label>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>Phone number*</label>
          <input
            type="tel"
            placeholder="Phone no."
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>Email address*</label>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>Password*</label>
          <input
            type="password"
            placeholder="********"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>Company name</label>
          <input
            type="text"
            placeholder=""
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
          />
        </div>

        <div className="form-group radio-group">
          <label>Are you an Agency?*</label>
          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="agency"
                checked={formData.isAgency}
                onChange={() => setFormData({...formData, isAgency: true})}
              /> Yes
            </label>
            <label>
              <input type="radio"  name="agency"
                checked={!formData.isAgency}
                onChange={() => setFormData({...formData, isAgency: false})}
              /> No
            </label>
          </div>
        </div>

        <button className="btn primary" onClick={() => navigate('/profile')}>
          Create Account   </button>
      </div>
    </div>
  );
}