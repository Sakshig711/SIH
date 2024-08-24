import React from 'react';
import '../App.css'; // Ensure this is present

const ProfilePosts = () => {
  return (
    <div className="profile-posts-container">
      <h3 className="activity-header">Activity</h3>
      <div className="action-boxes">
        <div className="action-box create-post-box">
          <h4>Create Post</h4>
          <button className="create-post-btn">Create a post</button>
        </div>
        <div className="action-box show-posts-box">
          <h4>Show Posts</h4>
          <button className="show-posts-btn">Show all posts</button>
        </div>
      </div>
      <div className="experience-box">
        <h4>Experience</h4>
        <button className="add-experience-btn">+</button>
      </div>
    </div>
  );
};

export default ProfilePosts;
