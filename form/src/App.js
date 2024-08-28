import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import FacultyAppraisalForm from './Components/Form/Research_paper/ResearchPaper';
import Patent from './Components/Form/Patent/Patent';
import SeminarsPage from './Components/Form/Seminar_Page/SeminarsPage';
import ConsultancyPage from './Components/Form/Consultancy/ConsultancyPage';
import PublicationPage from './Components/Form/Publication/PublicationPage';
import PersonalDetail from './Components/Form/Personal-Det/PersonalDetail';


function App() {
  return (
    <Router>
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<PersonalDetail />} />
          <Route path="/research-publications" element={<FacultyAppraisalForm />} />
          <Route path='/patent' element={<Patent/>}/>
          <Route path='/seminar' element={<SeminarsPage/>}/>
          <Route path='/Consult' element={<ConsultancyPage/>} />
          <Route path='/publication' element={<PublicationPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
