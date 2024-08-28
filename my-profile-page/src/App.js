import React from 'react';
import Header from './componets/Header/Header';
import Sidebar from './componets/Sidebar/Sidebar';
import SearchResults from './componets/SearchResult/SearchResult';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar />
        <SearchResults />
      </div>
    </div>
  );
}

export default App;
