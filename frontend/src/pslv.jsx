import React from 'react';
import LaunchVehicleInfo from './LaunchVehicleInfo';
import pslvImage from '/pslv_img.png';

const PSLV = () => {
  const pslvDetails = [
    { label: 'Height', value: '44 m' },
    { label: 'Mass', value: '320,000 kg' },
    { label: 'Stages', value: '4' },
    { label: 'Payload to GTO', value: '1,425 kg' },
    { label: 'Payload to SSPO', value: '1,750 kg' },
  ];

  return (
    <LaunchVehicleInfo
      name="Polar Satellite Launch Vehicle (PSLV)"
      image={pslvImage}
      description="The Polar Satellite Launch Vehicle (PSLV) is one of the most successful launch vehicles developed by the Indian Space Research Organisation (ISRO). It is known for its versatility and reliability in launching satellites into various orbits."
      details={pslvDetails}
      learnMoreUrl="https://www.isro.gov.in/PSLV_CON.html"
    />
  );
};

export default PSLV;
