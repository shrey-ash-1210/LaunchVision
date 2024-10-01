import React from 'react';
import './App.css'
import Navbar from './NavBar';
import DarkSemiRoundedButton_Live from './buttons';
function App() {

  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/landing_bg.jpg')" }}>
    <div>
      <Navbar />
    </div>
    <div className='fixed bottom-25 left-20 test-white'>Live Mission </div>
    <div className="fixed bottom-20 left-20">
      <DarkSemiRoundedButton_Live />
    </div>
    </div>
  );

}

export default App
