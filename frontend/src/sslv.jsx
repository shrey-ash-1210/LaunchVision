import React from 'react';
import LaunchVehicleInfo from './LaunchVehicleInfo';
import sslvImage from '/sslv_img.webp';

const SSLV = () => {
  const sslvDetails = [
    { label: 'Height', value: '34 m' },
    { label: 'Mass', value: '120,000 kg' },
    { label: 'Stages', value: '3' },
    { label: 'Payload to Planar Orbit', value: '500 kg' },
  ];

  return (
    <LaunchVehicleInfo
      name="Small Satellite Launch Vehicle (SSLV)"
      image={sslvImage}
      description="Small Satellite Launch Vehicle (SSLV) is a 3 stage Launch Vehicle configured with three Solid Propulsion Stages and liquid propulsion based Velocity Trimming Module (VTM) as a terminal stage. "
      details={sslvDetails}
      learnMoreUrl="https://www.isro.gov.in/SSLV_CON.html"
    />
  );
};

export default SSLV;
