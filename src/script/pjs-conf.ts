export const conf: any = {
  fps_limit: 60,
  particles: {
    number: {
      value: 15,
    },
    color: {
      value: "#888",
    },
    shape: {
      type: "character",
      character: {
        value: [
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
    size: {
      value: 10,
      random: false,
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: "#888",
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
    },
    modes: {
      grab: {
        distance: 300,
      },
    },
  },
  // retina_detect: true,
  style: {
    width: "100vw",
    height: "100vh",
    position: "absolute",
  },
};
