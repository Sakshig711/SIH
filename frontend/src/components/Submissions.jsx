import React, { useState } from 'react';
import { FaEye, FaDownload } from 'react-icons/fa';
import jsPDF from 'jspdf';
import './Submissions.css';

const Submissions = () => {
  const allSubmissions = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', employeeCode: 'E123', dateOfSubmission: '2024-08-25', content: 'Details of Submission 1' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', employeeCode: 'E456', dateOfSubmission: '2024-08-26', content: 'Details of Submission 2' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', employeeCode: 'E789', dateOfSubmission: '2024-08-20', content: 'Details of Submission 3' },
    { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com', employeeCode: 'E101', dateOfSubmission: '2024-08-22', content: 'Details of Submission 4' },
    { id: 5, name: 'Charlie Davis', email: 'charlie.davis@example.com', employeeCode: 'E202', dateOfSubmission: '2024-08-21', content: 'Details of Submission 5' },
    { id: 6, name: 'Eve Harris', email: 'eve.harris@example.com', employeeCode: 'E303', dateOfSubmission: '2024-08-23', content: 'Details of Submission 6' },
    { id: 7, name: 'Frank Green', email: 'frank.green@example.com', employeeCode: 'E404', dateOfSubmission: '2024-08-24', content: 'Details of Submission 7' }
  ];

  const [submissions, setSubmissions] = useState(allSubmissions.slice(0, 4));
  const [showAll, setShowAll] = useState(false);
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (key) => {
    setSortKey(key);
    setSortOrder('asc');
    const sortedSubmissions = [...allSubmissions].sort((a, b) => {
      if (a[key] > b[key]) return 1;
      if (a[key] < b[key]) return -1;
      return 0;
    });
    setSubmissions(sortedSubmissions.slice(0, showAll ? sortedSubmissions.length : 4));
  };

  const handleShowAll = () => {
    setShowAll(true);
    setSubmissions(allSubmissions);
  };

  const viewSubmission = (content) => {
    alert(content);
  };

  const downloadPDF = (submission) => {
    const doc = new jsPDF();
    doc.text(`Name: ${submission.name}`, 10, 10);
    doc.text(`Email: ${submission.email}`, 10, 20);
    doc.text(`Employee Code: ${submission.employeeCode}`, 10, 30);
    doc.text(`Date of Submission: ${submission.dateOfSubmission}`, 10, 40);
    doc.text(`Content: ${submission.content}`, 10, 50);
    doc.save(`${submission.name}_submission.pdf`);
  };

  return (
    <div className="submissions-container">
      <div className="submissions-header">
        <span className="submissions-title">Submissions</span>
        <div className="submissions-sort">
          <label htmlFor="sortDropdown">Sort by:</label>
          <div className="sort-dropdown">
            <select
              id="sortDropdown"
              onChange={(e) => handleSort(e.target.value)}
              value={sortKey}
              style={{ width: '200px' }} // Increased width for dropdown
            >
              <option value="">Select...</option>
              <option value="name">Name</option>
              <option value="employeeCode">Employee Code</option>
              <option value="dateOfSubmission">Date of Submission</option>
            </select>
          </div>
        </div>
      </div>
      <div className="submissions-list">
        {submissions.map((submission) => (
          <div key={submission.id} className="submission-item">
            <div className="submission-details">
              <p><strong>{submission.name}</strong></p>
              {sortKey && sortKey !== 'name' && <p>{submission[sortKey]}</p>}
            </div>
            <div className="submission-actions">
              <FaEye 
                className="icon" 
                title="View Submission" // Hover text for View icon
                onClick={() => viewSubmission(submission.content)} 
              />
              <FaDownload 
                className="icon" 
                title="Download Submission" // Hover text for Download icon
                onClick={() => downloadPDF(submission)} 
              />
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="show-all">
          <button className="bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75" onClick={handleShowAll}>Show all submissions →</button>
        </div>
      )}
    </div>
  );
};

export default Submissions;
