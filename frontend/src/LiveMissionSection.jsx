import React from 'react';
import { useNavigate } from 'react-router-dom';
import DarkSemiRoundedButton from './buttons';

const LiveMissionSection = () => {
  const navigate = useNavigate(); // useNavigate hook for redirecting

  const handleRedirect = () => {
    window.location.href = '/liveMission.html';
  };

  return (
    <div
      className="fixed bottom-[5vh] left-[5vw] cursor-pointer z -50"
      onClick={handleRedirect} // Redirect on clicking the whole div
    >
      <p className="text-white text-base mb-2 font-bold">Live Mission</p>
      <DarkSemiRoundedButton label="Live" className="transition transform hover:scale-105"/> 
    </div>
  );
};

export default LiveMissionSection;  