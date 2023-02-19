import { MAP_KEY } from 'hooks/UseMap';
import { STORE_KEY } from 'hooks/UseStores';
import React from 'react';
import useSWR from 'swr';
import { NaverMap } from 'types/map';
import { Store } from 'types/store';
import Marker from './Marker';

const Markers = () => {
  const { data: map } = useSWR<NaverMap>(MAP_KEY);
  const { data: stores } = useSWR<Store[]>(STORE_KEY);

  if (!map || !stores) return null;
  return (
    <>
      {stores.map(store => {
        return (
          <Marker key={store.nid} map={map} coordinates={store.coordinates} />
        );
      })}
    </>
  );
};

export default Markers;
