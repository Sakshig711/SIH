import React, { useState } from 'react';
import Footer from './Footer';  // Assuming the footer is already being imported
import '../../src/App.css';


function AdminPage() {
  const [pendingRequests, setPendingRequests] = useState([
    { id: 1, name: 'Shraddha', location: 'ABC University', position: 'Assistant Professor' },
    { id: 2, name: 'Shraddha', location: 'ABC University', position: 'Lecturer' },
    { id: 3, name: 'Shraddha', location: 'ABC University', position: 'Actor' },
    { id: 4, name: 'Shraddha', location: 'ABC University', position: 'Lecturer' },
    { id: 5, name: 'Shraddha', location: 'ABC University', position: 'Lecturer' },
    { id: 6, name: 'Shraddha', location: 'ABC University', position: 'Lecturer' }
  ]);

  const handleView = (id) => {
    console.log(`Viewing details for request ID: ${id}`);
  };

  const handleAccept = (id) => {
    console.log(`Accepted request ID: ${id}`);
    setPendingRequests(pendingRequests.filter(request => request.id !== id));
  };

  const handleDelete = (id) => {
    console.log(`Deleted request ID: ${id}`);
    setPendingRequests(pendingRequests.filter(request => request.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-semibold text-center mb-6 bg-[#F2752F] text-black py-3 rounded">
          Admin Dashboard
        </h1>

        <div className="overflow-hidden bg-white rounded-lg shadow-lg p-6 min-h-[calc(100vh-200px)]">
          <h2 className="text-2xl font-semibold mb-4">Pending Teacher Requests</h2>
          <div className="space-y-4 overflow-y-auto p-4 border-2 border-gray-200 rounded-md h-full">
            {pendingRequests.length > 0 ? (
              pendingRequests.map((request) => (
                <div key={request.id} className="border rounded-lg p-4 bg-white shadow-md flex justify-between items-center">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{request.name}</h3>
                    <p className="text-gray-600">{request.location}</p>
                    <p className="text-gray-600">{request.position}</p>
                  </div>
                  <div className="flex space-x-4 gap">
                    <button
                      onClick={() => handleView(request.id)}
                      className="bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleAccept(request.id)}
                      className="bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleDelete(request.id)}
                      className="bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No pending requests</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
