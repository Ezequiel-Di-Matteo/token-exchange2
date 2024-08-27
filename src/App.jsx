import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './assets/Components/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Invite from './pages/Invite/Invite'
import Trade from './pages/Trade/Trade'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Invite" element={<Invite />} />
          <Route path="/Trade" element={<Trade />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
