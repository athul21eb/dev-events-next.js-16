'use client';

import dynamic from 'next/dynamic';

const DynamicLightRays = dynamic(() => import('./LightRays'), {
  ssr: false,
});

export default DynamicLightRays;