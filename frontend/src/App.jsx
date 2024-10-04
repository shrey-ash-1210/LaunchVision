import './App.css'
import Navbar from './NavBar';
import React from 'react';
import Login from './login';
import SignUp from './signup';
import ForgotPassword from './forgot-password';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LiveMissionSection from './LiveMissionSection';
import PSLV from './pslv';
import GSLV from './gslv';
import SSLV from './sslv';
import UpcomingSpaceEvents from './upcoming';
function App() {
  return (
    <Router>
    <div className="min-h-screen  fixed w-full   bg-center  " style={{ backgroundImage: "url('/landing_bg.jpg')" }}> 
    <div className="">
      <Navbar />
      <LiveMissionSection />
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/pslv" element={<PSLV />} />
          <Route path="/gslv" element={<GSLV />} />
          <Route path="/sslv" element={<SSLV />} />
          <Route path="/upcoming" element={<UpcomingSpaceEvents />} />
        </Routes>
    </div>
    </div>
    </Router>
  );
}

export default App