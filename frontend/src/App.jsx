import './App.css'
import Navbar from './NavBar';
import React from 'react';
import Login from './login';
import SignUp from './signup';
import ForgotPassword from './forgot-password';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LiveMissionSection from './LiveMissionSection';
function App() {
  return (
    <Router>
    <div className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/landing_bg.jpg')" }}> 
    <div>
      <Navbar />
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
    </div>
    <LiveMissionSection />
    </div>
    </Router>
  );

}

export default App