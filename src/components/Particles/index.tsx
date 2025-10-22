"use client";

import type { ISourceOptions } from "@tsparticles/engine";
import ParticlesExternal, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

export const Particles = () => {
  const options = useMemo<ISourceOptions>(
    () => ({
      detectRetina: true,
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      fpsLimit: 120,
      particles: {
        number: {
          value: 70,
          density: {
            enable: false,
          },
        },
        color: {
          value: ["#00d5be", "#00bcff", "#00d5be"],
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.3,
        },
        size: {
          value: { min: 1, max: 2 },
        },
        links: {
          blink: false,
          enable: true,
          distance: 80,
          color: "#00d5be",
          opacity: 0.1,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          outModes: {
            default: "out",
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "attract",
          },
        },
        modes: {
          attract: {
            distance: 250,
            duration: 0.4,
            easing: "ease-out-quad",
            factor: 1,
            maxSpeed: 50,
            speed: 0.5,
          },
        },
      },
    }),
    [],
  );

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return <ParticlesExternal id="particles" options={options} />;
  }

  return <></>;
};
