import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './navbar/navbar'; // Your navigation component
import Homepage from './homepage/homepage'; // Your homepage component
import Alerts from './Alerts/Alerts'; // Alerts page component
import WaterMonitor from './monitoring/monitoring';
import Feed from './feed/feed';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav /> 
        <Routes>
          <Route path="/" element={<Homepage />} /> 
          <Route path="/alerts" element={<Alerts />} /> 
          <Route path="WaterMonitor" element={<WaterMonitor />} />
          <Route path="feed" element={<Feed />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
