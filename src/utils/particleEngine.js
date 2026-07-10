import { tsParticles } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export default async function initParticles(canvas) {
  await loadFull(tsParticles);

  await tsParticles.load({
    element: canvas,
    options: {
      fullScreen: false,
      fpsLimit: 60,
      background: { color: { value: "transparent" } },
      particles: {
        number: { value: 80, density: { enable: true, area: 800 } },
        color: { value: "#ffb300" },
        shape: { type: "circle" },
        opacity: { value: 0.4, random: true },
        size: { value: { min: 1, max: 4 } },
        links: {
          enable: true,
          distance: 120,
          color: "#ffb300",
          opacity: 0.2,
          width: 0.5
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          random: false,
          straight: false,
          outModes: { default: "bounce" },
          attract: { enable: false }
        }
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: false }
        },
        modes: {
          repulse: { distance: 80, duration: 0.4 }
        }
      },
      detectRetina: true
    }
  });
}
