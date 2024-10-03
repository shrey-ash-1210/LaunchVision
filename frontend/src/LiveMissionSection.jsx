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
      className="fixed bottom-20 left-20 cursor-pointer"
      onClick={handleRedirect} // Redirect on clicking the whole div
    >
      <p className="text-white text-base mb-2 font-bold">Live Mission</p>
      <DarkSemiRoundedButton label="Live" /> 
    </div>
  );
};

export default LiveMissionSection;  