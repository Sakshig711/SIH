import React from 'react';
import '../App.css'; // Ensure this is present

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <div className="profile-picture">
        <img
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder image
          alt="Profile"
        />
        <input type="file" className="upload-btn" />
      </div>
      <div className="profile-info">
        <h1>Jayesh Kumar</h1>
        <h2>Location: Pune Institute of Computer Technology</h2>
        <div className="profile-buttons">
          <button className="connect-btn">Connect</button>
          <button className="message-btn">Message</button>
          <button className="anonymous-btn">Anonymous</button>
        </div>
      </div>
      <div className="profile-stats">
        <div className="stats-box">
          <p>Ratings: ★★★★★</p>
          <p>Badges: 🏅🏅</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
