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

/* -------- ruine du premier parallax -------- */

// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: ".intro-section",
//       start: "top top",
//       // le chiffre de end indiquera la durée du parallax, tout devra se caler dessus
//       end: "7000px bottom",
//       scrub: true, //le chiffre donne un effet plus lisse à l'animation
//       pin: true,
//       // markers: true,
//       ease: "none", //je sais pas si cette ligne est utile
//     },
//   })
//   // le premier screen à animer est le dernier
//   // vérifié en le faisant que le bas de l'image arrive pile en bas de la section quand l'animation est finit,
//   // puis vous pourrez animer les autres screen
//   .to(
//     ".screen-a",
//     {
//       top: "-220vh", // -
//     },
//     0
//   )
//   .to(
//     ".screen-b",
//     {
//       top: "-270vh", // -
//     },
//     0
//   )
//   .to(
//     ".screen-c",
//     {
//       top: "-510vh", // -380
//     },
//     0
//   )
//   .to(
//     ".screen-d",
//     {
//       top: "-640vh", // -510
//     },
//     0
//   )
//   .to(
//     ".screen-e",
//     {
//       top: "-730vh", // -640
//     },
//     0
//   )
//   .to(
//     ".screen-f",
//     {
//       top: "-800vh", // -770
//     },
//     0
//   )
//   .to(
//     ".screen-g",
//     {
//       top: "-840vh", // ~ -950 ~
//     },
//     0
//   );

/* -------- scroll horizontal -------- */

gsap.to(".slider-track", {
  scrollTrigger: {
    trigger: ".slider-mask",
    // start c'est le moment ou l'animation commence dans le site,
    // le premier top c'est par rapport à l'élément concerné,
    // le deuxieme c'est par rapport à la page
    start: "top top",
    // l'emplacement de end change la vitesse du scroll horizontal,
    // plus le chiffre à % est grand, plus il sera lent
    end: "+=600%",
    pin: true,
    scrub: true,
    // markers: true,
  },
  // x définit jusqu'ou la section va a droite, on peut le calculer (mais j'ai pas compris comment) ou faire à taton, bonne chance !
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

gsap.from(".case-fixed", {
  scrollTrigger: {
    trigger: ".fall-section",
    start: "-100px bottom",
    end: "400px top",
    scrub: 1,
    markers: true,
  },
  top: "-750px",
});

gsap.fromTo(
  ".case-fixed",
  {
    scrollTrigger: {
      trigger: ".fall-section",
      start: "bottom bottom",
      end: "bottom top",
      scrub: 1,
      markers: true,
    },
    top: "0",
  },
  {
    scrollTrigger: {
      trigger: ".fall-section",
      start: "bottom bottom",
      end: "bottom top",
      scrub: 1,
      markers: true,
    },
    top: "100vh",
  }
);
