'use client';

import React from 'react';
import Map from './Map';

const MapSection = () => {
  /** onLoadMap */

  return (
    <Map
      onLoad={() => {
        console.log('did');
      }}
    />
  );
};

export default MapSection;
