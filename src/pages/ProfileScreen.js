import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function ProfileScreen() {
  const navigate = useNavigate();

  return (
    <div className="screen-container">
      <div className="card profile-card">
        <h1>Account Settings</h1>
        <div className="profile-content">
          <h2>Omkar Chothave</h2>
          <p className="email" >omkarchothave5@gmail.com</p>
          <p className="bio">
            Lorem Ipsum Dolor Sit Amet. Consetetur Sadipscing<br />
            Elitr.Sed Diam Nonumy Eirmod Tempor Invidunt Ut<br />
            Labore Et Dolore Magna Aliquyam Erat.Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
}