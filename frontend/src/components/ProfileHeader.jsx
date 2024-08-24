import React from 'react';

const ProfileHeader = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 bg-gray-100 rounded-lg shadow-xl">
      {/* Profile Picture and File Upload */}
      <div className="flex items-center mb-6 md:mb-0 md:w-1/3 relative">
        <img
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-orange-600 shadow-lg"
        />
        <div className="ml-4">
          <input
            type="file"
            className="cursor-pointer hidden"
            id="photoUpload"
            accept="image/*"
          />
          <label
            htmlFor="photoUpload"
            className="bg-orange-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-500 transition cursor-pointer"
          >
            Choose Photo
          </label>
        </div>
      </div>

      {/* Profile Information */}
      <div className="flex-grow md:w-2/3 px-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-2 relative">
          Jayesh Kumar
          <div className="absolute bottom-0 left-0 w-full border-b-2 border-orange-600" />
        </h1>
        <div className="flex gap-4 mb-4">
          <div className="bg-white p-4 rounded-lg shadow-md flex-1 mr-2">
            <h2 className="text-lg text-gray-700 font-semibold">Location</h2>
            <p className="text-gray-600">Pune Institute of Computer Technology</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex-1 ml-2">
            <h2 className="text-lg text-gray-700 font-semibold">Position</h2>
            <p className="text-gray-600">Assistant Professor</p>
          </div>
        </div>
        <div className="flex gap-4 mb-6">
          <button className="bg-orange-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-500 transition">Connect</button>
          <button className="bg-orange-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-500 transition">Message</button>
          <button className="bg-orange-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-500 transition">Anonymous</button>
        </div>
      </div>

      {/* Profile Stats */}
      <div className="flex items-center justify-start gap-4 mt-6 md:mt-0 md:w-1/3">
        <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-lg w-full text-center">
          <p className="text-lg font-semibold text-gray-800">Ratings</p>
          <p className="text-2xl text-orange-600">★★★★★</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-lg w-full text-center">
          <p className="text-lg font-semibold text-gray-800">Badges</p>
          <p className="text-2xl text-orange-600">🏅🏅</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
