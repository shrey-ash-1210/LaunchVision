import React, { useState, useEffect } from 'react';

const MissionPage = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const totalMissionDuration = 240; // 4 minutes in seconds
  const [altitude, setAltitude] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [missionTime, setMissionTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState({
    title: 'Launch Vehicle Phase: Pre-Launch',
    description: 'The GSLV is being prepared for launch. Systems are undergoing final checks before the countdown begins.',
    details: '<p><span class="highlight">Launch Site:</span> Satish Dhawan Space Centre</p><p><span class="highlight">Fuel Type:</span> Cryogenic</p>',
    imageUrl: '',
  });

  const phaseData = [
    {
      title: 'Launch',
      description: "The launch stage signifies the very beginning of the rocket's journey, commencing with its lift-off from the launch pad.",
      details: 'The entire launch process kicks off with a thorough series of system checks to ensure that all systems are functioning optimally.',
      components: 'GSLV launch vehicle, solid rocket boosters.',
      howItWorks: 'This stage is crucial as it must overcome the significant gravitational pull of the Earth.',
      imageUrl: 'Launch.jpg',
      milestone: 10,
    },
    // other phases...
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(prev => prev + 1);
      updateMissionStats();
    }, 1000);

    return () => clearInterval(interval);
  }, [elapsedTime]);

  const updateMissionStats = () => {
    // Random altitude and velocity for simulation
    setAltitude(`${Math.floor(Math.random() * 100)} KM`);
    setVelocity(`${Math.floor(Math.random() * 10000) + 1000} KM/H`);

    // Update mission time
    const hours = String(Math.floor(elapsedTime / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((elapsedTime % 3600) / 60)).padStart(2, '0');
    const seconds = String(elapsedTime % 60).padStart(2, '0');
    setMissionTime(`+${hours}:${minutes}:${seconds}`);

    // Update progress bar
    const progress = (elapsedTime / totalMissionDuration) * 100;
    setProgress(progress);

    // Update phase data dynamically
    phaseData.forEach(phase => {
      if (progress >= phase.milestone) {
        setCurrentPhase(phase);
      }
    });
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen p-5">
      {/* Menu Icon */}
      <div className="text-2xl absolute top-5 left-5 cursor-pointer">☰</div>

      {/* Video Section */}
      <div className="relative w-full mb-5">
        <div className="absolute top-2 right-2 bg-red-600 px-3 py-1 font-bold rounded-md">LIVE</div>
        <iframe
          className="w-full h-64 md:h-96"
          src="https://www.youtube.com/embed/jynmNenneFk?autoplay=1"
          frameBorder="0"
          allowFullScreen
          title="Live viewing of GSLV-F14/INSAT-3DS mission"
        ></iframe>
      </div>

      {/* Mission Stats */}
      <div className="flex justify-between mb-5">
        <Stat label="Altitude" value={altitude} />
        <Stat label="Velocity" value={velocity} />
        <Stat label="Mission Time" value={missionTime} />
      </div>

      {/* Mission Progress Bar */}
      <div className="relative w-full bg-gray-700 h-4 rounded-lg overflow-hidden mb-5">
        <div
          className="bg-blue-500 h-full transition-width duration-1000 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
        <ProgressPoint left="10%" label="Launch" />
        <ProgressPoint left="30%" label="Core Ignition" />
        <ProgressPoint left="50%" label="Strap On Separation" />
        <ProgressPoint left="70%" label="Fairing Separation" />
        <ProgressPoint left="90%" label="Stage Separation" />
      </div>

      {/* Phase Information */}
      <div>
        <h1 className="text-3xl font-bold mb-4">{currentPhase.title}</h1>
        <p className="text-xl mb-4">{currentPhase.description}</p>
        <div dangerouslySetInnerHTML={{ __html: currentPhase.details }}></div>
        <a href="#" className="mt-5 inline-block bg-blue-500 px-6 py-3 rounded-md text-white hover:bg-blue-700 transition">
          Learn More
        </a>
      </div>
    </div>
  );
};

const Stat = ({ label, value }) => (
  <div className="text-center">
    <div className="text-xl">{label}</div>
    <div className="text-2xl font-bold">{value}</div>
  </div>
);

const ProgressPoint = ({ left, label }) => (
  <div className="absolute" style={{ left }}>
    <div className="w-3 h-3 bg-white rounded-full"></div>
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 text-xs">{label}</div>
  </div>
);

export default MissionPage;
