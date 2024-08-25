import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import CreatePost from './components/CreatePost';
import AdminPage from './components/AdminPage'; // Import your AdminPage component
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/admin" element={<AdminPage />} /> {/* Add this route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
