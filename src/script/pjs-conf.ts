export const conf: any = {
  particles: {
    number: {
      value: 15,
      density: {
        enable: true,
        value_area: 700,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "character",
      character: {
        value: [
          "W",
          "O",
          "N",
          "G",
          "ISFJ-T",
          "Scrupulous",
          "Enthusiastic",
          "JS",
          "TS",
          "Python",
          "Node.js",
          "React.js",
          "Back-end",
          "Web-Front",
        ],
        font: "Baloo Thambi 2",
        style: "",
        weight: "400",
      },
    },
    opacity: {
      value: 0.7,
      random: false,
      anim: {
        enable: true,
        speed: 0.3,
        opacity_min: 0.5,
        sync: false,
      },
    },
    size: {
      value: 10,
      random: false,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  style: {
    width: "calc(100vw + 400px)",
    height: "calc(100vh + 400px)",
    position: "absolute",
    top: "-200px",
    left: "-200px",
  },
};
