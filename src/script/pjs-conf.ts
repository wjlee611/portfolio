export const conf: any = {
  particles: {
    number: {
      value: 28,
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
    },
    size: {
      value: 10,
      random: false,
    },
    line_linked: {
      enable: true,
      distance: 250,
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
      out_mode: "bounce",
      bounce: false,
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
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  retina_detect: true,
  style: {
    width: "100vw",
    height: "100vh",
    position: "absolute",
  },
};
