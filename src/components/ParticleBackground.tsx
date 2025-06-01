'use client';
import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import type { Engine } from '@tsparticles/engine';

export default function ParticleBackground() {
  const loadParticles = useCallback(async (main: Engine) => {
    await loadFull(main);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={loadParticles}
      options={{
        /* your particles config here */
      }}
    />
  );
}
