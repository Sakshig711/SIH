import React, { useState } from 'react';

function AdminPage() {
  const [pendingRequests, setPendingRequests] = useState([
    { id: 1, name: 'Shraddha', location: 'ABC University', position: 'Assistant Professor' },
    { id: 2, name: 'Shraddha', location: 'ABC University', position: 'Lecturer' },
    { id: 3, name: 'Shraddha', location: 'ABC University', position: 'Actor' }
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
        <h1 className="text-3xl font-semibold text-center mb-6">Admin Dashboard</h1>

        <h2 className="text-2xl font-semibold mb-6">Pending Teacher Requests</h2>
        <div className="space-y-6">
          {pendingRequests.length > 0 ? (
            pendingRequests.map((request) => (
              <div
                key={request.id}
                className="border rounded-lg p-6 bg-white shadow-md flex justify-between items-center"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{request.name}</h3>
                  <p className="text-gray-600">{request.location}</p>
                  <p className="text-gray-600">{request.position}</p>
                </div>
                <div className="flex space-x-6">
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
      <footer className="bg-beige text-center py-4 mt-auto">
        © SIH 2024. All rights reserved.
      </footer>
    </div>
  );
}

export default AdminPage;
