gsap.to("#above-the-fold .above-the-fold-bg", {
  scale: 1.4,
  scrollTrigger: {
    trigger: "#introduction",
    scrub: true,
  },
});

gsap.to("p.text-reveal", {
  height: 700,
  scrollTrigger: {
    trigger: "#introduction",
    start: "top center",
    scrub: true,
  },
});

gsap.to("#parallax-text span", {
  height: 150,
  scrollTrigger: {
    trigger: "#parallax-text",
    start: "top center",
    scrub: true,
  },
});

gsap.to("#marquee p", {
  x: -1795,
  duration: 8,
  ease: "linear", // nessuna accelerazione
  repeat: -1, // infinito
});

gsap.to("#marquee .above-the-fold-bg", {
  scale: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#marquee .above-the-fold-bg",
    start: "top top",
    scrub: true,
  },
});

gsap.to("#marquee p", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#marquee .above-the-fold-bg",
    start: "top bottom",
    scrub: true,
  },
});

gsap.fromTo(
  "#marquee .above-the-fold-bg",
  { scale: 1, opacity: 1 },
  {
    scale: 0.8,
    opacity: 0,
    scrollTrigger: {
      trigger: "#card-2",
      start: "top center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  "#card-2",
  {
    y: 1200,
  },
  {
    y: 10,
    scrollTrigger: {
      trigger: "#card-2",
      start: "top center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  "#card-2 .above-the-fold-bg",
  { scale: 1, opacity: 1 }, // <-- parte dallo stato finale della prima
  {
    scale: 0.8,
    opacity: 0,
    scrollTrigger: {
      trigger: "#card-3",
      start: "top top",
      scrub: true,
    },
  }
);

gsap.fromTo(
  "#card-3",
  {
    y: 2000,
  },
  {
    y: 10,
    scrollTrigger: {
      trigger: "#card-3",
      start: "top center",
      scrub: true,
      markers: true,
    },
  }
);
