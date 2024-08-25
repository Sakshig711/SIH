import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './components/AdminPage'; // Import your AdminPage component
import Footer from './components/Footer'; // Import your Footer component

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/admin" element={<AdminPage />} />
            {/* Other routes can go here */}
          </Routes>
        </div>
        <Footer /> {/* Make sure the Footer is at the bottom */}
      </div>
    </Router>
  );
}

export default App;
