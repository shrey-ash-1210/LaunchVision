import React from 'react';

function UpcomingSpaceEvents() {
  return (
    <div className="container">
      <h1 className="events">Upcoming Events</h1>
      <div className="timeline">
        <div className="line h-full border-l-2 border-gray-300 absolute left-10"></div>
        <div className="event">
          <span className="year">2024</span>
          <h2>Gaganyaan 1</h2>
          <p>
            The first test flight of the Gaganyaan spacecraft, designed to carry
            three astronauts and equipped with rendezvous and docking
            capabilities
          </p>
          <div className="circle h-6 w-6 bg-white rounded-full absolute top-2 left-[-67px]"></div>
        </div>
        <div className="event">
          <h2>NISAR</h2>
          <p>
            A joint project with NASA to launch a dual-frequency synthetic
            aperture radar satellite for remote sensing is notable for being the
            first dual-band radar imaging satellite.
          </p>
          <div className="circle h-6 w-6 bg-white rounded-full absolute top-2 left-[-67px]"></div>
        </div>
        <div className="event">
          <span className="year">2025</span>
          <h2>Gaganyaan 2</h2>
          <p>The second test flight before the inaugural crewed mission.</p>
          <div className="circle h-6 w-6 bg-white rounded-full absolute top-2 left-[-67px]"></div>
        </div>
        <div className="event">
          <h2>Venus Orbiter Mission (Shukrayaan)</h2>
          <p>An orbiter mission to study the atmosphere of Venus.</p>
          <div className="circle h-6 w-6 bg-white rounded-full absolute top-2 left-[-67px]"></div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingSpaceEvents;
