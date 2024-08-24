import React from 'react';
import ProfileHeader from './ProfileHeader';  // Import default correctly
import ProfilePosts from './ProfilePosts';
import ProfileChart from './ProfileChart';

const Profile = () => {
  return (
    <div>
      <ProfileHeader />
      <ProfilePosts />
      <ProfileChart />
    </div>
  );
};

export default Profile;
