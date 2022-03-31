module.exports = {
  navLinks: [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Apps",
      url: "/apps",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ],
  footerLinks: [
    { name: "Mission", url: "/mission" },
    { name: "Credits", url: "/credits" },
  ],
  scrollRevealConfig: (delay = 200) => ({
    delay,
    distance: "0px",
    duration: 469,
    easing: "cubic-bezier(0.37, 0, 0.63, 1)",
    interval: 0,
    opacity: 0.01,
    origin: "bottom",
    rotate: { x: 0, y: 0, z: 0 },
    scale: 1,
    cleanup: false,
    container: document.documentElement,
    desktop: true,
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor: 0,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
}
