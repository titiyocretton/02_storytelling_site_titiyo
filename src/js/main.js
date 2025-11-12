import { gsap } from "gsap";
import { _horizontal } from "gsap/Observer";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* -------- parallax -------- */

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".intro-section1",
      start: "bottom bottom",
      end: "4000px top",
      scrub: true,
      pin: true,
      // markers: true,
    },
  })
  .to(
    ".screen-a1",
    {
      top: "-150vh",
    },
    0
  )
  .to(
    ".screen-b1",
    {
      top: "-200vh",
    },
    0
  )
  .to(
    ".screen-c1",
    {
      top: "-140vh",
    },
    0.15
  )
  .to(
    ".screen-d1",
    {
      top: "-140vh",
    },
    0.2
  )
  .to(
    ".screen-e1",
    {
      top: "-140vh",
    },
    0.35
  )
  .to(
    ".screen-f1",
    {
      top: "-160vh",
    },
    0.4
  )
  .to(
    ".screen-g1",
    {
      top: "-170vh",
    },
    0.55
  );

/* -------- scroll horizontal -------- */

gsap.to(".slider-track", {
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    end: "+=600%",
    pin: true,
    scrub: true,
    // markers: true,
  },
  x: "-100%",
  ease: "sine.inOut",
});

/* -------- section thunder -------- */

gsap.from(".thunder-left", {
  scrollTrigger: {
    trigger: ".thunders",
    start: "140px center",
    end: "170px center",
    scrub: 1,
    // markers: true,
  },
  opacity: 0,
  left: "-80vw",
  top: "-600px",
});

gsap.from(".thunder-right", {
  scrollTrigger: {
    trigger: ".thunders",
    start: "240px center",
    end: "270px center",
    scrub: 1,
    // markers: true,
  },
  opacity: 0,
  left: "80vw",
  top: "-600px",
});

/* -------- chute de la bestiole -------- */

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".fall-section",
      start: "-600px bottom",
      end: "110% top",
      scrub: true,
      // markers: true,
    },
  })
  .to(
    ".case-fixed",
    {
      top: "25%",
    },
    0
  )
  .to(
    ".case-fixed",
    {
      top: "20%",
    },
    0.8
  )
  .to(
    ".case-fixed",
    {
      top: "100vh",
    },
    2
  );

/* -------- sabre footer -------- */

gsap.from(".end-tiger-container", {
  scrollTrigger: {
    trigger: ".end-section",
    start: "50% center",
    // markers: true,
  },
  top: "40vh",
  delay: 0.8,
});
