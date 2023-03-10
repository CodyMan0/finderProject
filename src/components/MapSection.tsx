'use client';

import UseMap from 'hooks/UseMap';
import UseStores from 'hooks/UseStores';
import React, { useEffect } from 'react';
import { NaverMap } from 'types/map';
import { Store } from 'types/store';
import Map from './Map';
import Markers from './Markers';

interface Props {
  stores: Store[];
}

const MapSection = ({ stores }: Props) => {
  const { initializeStores } = UseStores();
  const { initializeMap } = UseMap();
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
  };

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
};

export default MapSection;
