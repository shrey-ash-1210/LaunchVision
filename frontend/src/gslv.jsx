import React from 'react';
import LaunchVehicleInfo from './LaunchVehicleInfo';
import gslvImage from '/gslv_img.png';

const GSLV = () => {
  const gslvDetails = [
    { label: 'Height', value: '52 m' },
    { label: 'Mass', value: '420,000 kg' },
    { label: 'Stages', value: '3' },
    { label: 'Payload to GTO', value: '2,250 kg' },
    { label: 'Payload to LEO', value: '6,000 kg' },
  ];

  return (
    <LaunchVehicleInfo
      name="Geosynchronous Satellite Launch Vehicle (GSLV)"
      image={gslvImage}
      description="The GSLV is a launch vehicle developed by ISRO to deploy satellites into geosynchronous transfer orbits.Known for its ability to carry heavier payloads and has been a crucial part of India's space missions since its inception."
      details={gslvDetails}
      learnMoreUrl="https://www.isro.gov.in/GSLV_CON.html"
    />
  );
};

export default GSLV;