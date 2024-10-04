import React from 'react';

const LaunchVehicleInfo = ({ name, image, description, details, learnMoreUrl }) => {
  return (
    <div className="flex relative justify-center mb-10 items-center h-screen bg-cover bg-no-repeat z+10">
      <div className="info flex-1 mx-10 p-5 mb-20 bg-black/70 rounded-lg">
        <h1 className="text-4xl font-bold mb-8 text-white">{name}</h1>
        <p className="text-2xl leading-loose text-white">{description}</p>
        <div className="details mt-10">
          {details.map((detail, index) => (
            <p key={index} className="highlight text-2xl font-semibold text-white mb-2">
              <span className="text-white">{detail.label}</span>: {detail.value}
            </p>
          ))}
        </div>
        <a
          href={learnMoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="learn-more text-2xl font-semibold text-white bg-blue-700 hover:bg-blue-800 py-3 px-6 rounded-md mt-10 transition duration-300 ease-in-out"
        >
          Learn More
        </a>
      </div>
      <div className="rocket">
        <img src={image} alt={`${name} Rocket`} className="w-48 h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default LaunchVehicleInfo;