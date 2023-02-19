'use client';

import { use, useEffect } from 'react';
import MapSection from '@/components/MapSection';
import React from 'react';
import UseStores from 'hooks/UseStores';

const page = () => {
  const stores = use(getData());

  return (
    <main className="w-full h-full">
      <MapSection stores={stores} />
    </main>
  );
};

export default page;

async function getData() {
  const stores = (await import('public/stores.json')).default;

  return stores;
}
