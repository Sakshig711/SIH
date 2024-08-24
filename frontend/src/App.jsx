import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Add your styles here
import Profile from './components/Profile';
import Footer from './components/Footer';
import CreatePost from './components/CreatePost'; // Import your CreatePost component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
