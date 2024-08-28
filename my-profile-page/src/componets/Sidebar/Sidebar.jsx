import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="filter-section">
        <h4>any time</h4>
        <ul>
          <li>From 2024</li>
          <li>From 2023</li>
          <li>From 2020</li>
          <li>Custom Category...</li>
        </ul>
      </div>
      <div className="filter-section">
        <h4>Sort by relevance</h4>
        <ul>
          <li>Sort by date</li>
        </ul>
      </div>
      <div className="filter-section">
        <h4>any kind of article</h4>
        <ul>
          <li>Review articles</li>
        </ul>
      </div>
      <div className="filter-section">
        <label>
          <input type="checkbox" /> Including patents
        </label>
        <label>
          <input type="checkbox" checked /> with the source of the information
        </label>
      </div>
      <div className="filter-section">
        <button className="create-alert">Create an alert</button>
      </div>
    </aside>
  );
};

export default Sidebar;
