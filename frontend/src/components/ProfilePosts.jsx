import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePosts = () => {
  const navigate = useNavigate();

  const handleCreatePostClick = () => {
    navigate('/create-post');
  };

  return (
    <div className="p-5 bg-gray-100 mt-5 flex flex-col items-center">
      <h3 className="text-3xl font-bold text-gray-900 mb-6">Employee Dashboard</h3>
      <div className="flex flex-wrap justify-between w-full max-w-6xl gap-6">
        {/* Create Post Box */}
        <div className="border border-gray-300 rounded-lg p-6 shadow-lg bg-white flex-1 min-w-[300px] text-center transition-transform transform hover:scale-105">
          <h4 className="text-2xl font-semibold mb-4 text-gray-800">Create Post</h4>
          <p className="text-gray-700 mb-4">
            Share updates or announcements related to employee performance or achievements. You can post notes, feedback, or important information for all employees to see.
          </p>
          <button  onClick={handleCreatePostClick} className="bg-orange-600 text-white py-3 px-6 rounded-lg text-lg font-semibold mt-2 hover:bg-orange-500 transition-colors">
            Create a Post
          </button>
        </div>

        {/* Show Posts Box */}
        <div className="border border-gray-300 rounded-lg p-6 shadow-lg bg-white flex-1 min-w-[300px] text-center transition-transform transform hover:scale-105">
          <h4 className="text-2xl font-semibold mb-4 text-gray-800">Show Posts</h4>
          <p className="text-gray-700 mb-4">
            View all posts related to employee performance, feedback, and other important announcements. This section provides a comprehensive view of recent updates and communications.
          </p>
          <button className="bg-orange-600 text-white py-3 px-6 rounded-lg text-lg font-semibold mt-2 hover:bg-orange-500 transition-colors">
            Show All Posts
          </button>
        </div>

        {/* Experience Box */}
        <div className="border border-gray-300 rounded-lg p-6 shadow-lg bg-white flex-1 min-w-[300px] text-center transition-transform transform hover:scale-105 flex flex-col items-center">
          <h4 className="text-2xl font-semibold mb-4 text-gray-800">Experience</h4>
          <p className="text-gray-700 mb-4">
            Add details about your professional experiences, achievements, and key contributions. This information is crucial for performance reviews and career development.
          </p>
          <button className="bg-orange-600 text-white py-3 px-6 rounded-lg text-lg font-semibold mt-2 hover:bg-orange-500 transition-colors h-12 flex items-center justify-center">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePosts;
