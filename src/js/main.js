import { gsap } from "gsap";
import { _horizontal } from "gsap/Observer";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// section thunder

// animation de l'éclaire qui arrive et devient visible
// gsap.from(".thunder", {
//   scrollTrigger: {
//     trigger: ".thunder",
//     start: "250px center",
//     end: "280px center",
//     scrub: true,
//     // markers: true,
//   },
//   opacity: 0,
//   left: "80vw",
// });

// deuxieme test paralax

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".intro-section",
      start: "top top",
      // le chiffre de end indiquera la durée du parallax, tout devra se caler dessus
      end: "7000px bottom",
      scrub: true, //le chiffre donne un effet plus lisse à l'animation
      pin: true,
      // markers: true,
      ease: "none", //je sais pas si cette ligne est utile
    },
  })
  // le premier screen à animer est le dernier
  // vérifié en le faisant que le bas de l'image arrive pile en bas de la section quand l'animation est finit,
  // puis vous pourrez animer les autres screen
  .to(
    ".screen-a",
    {
      top: "-220vh", // -
    },
    0
  )
  .to(
    ".screen-b",
    {
      top: "-270vh", // -
    },
    0
  )
  .to(
    ".screen-c",
    {
      top: "-510vh", // -380
    },
    0
  )
  .to(
    ".screen-d",
    {
      top: "-640vh", // -510
    },
    0
  )
  .to(
    ".screen-e",
    {
      top: "-730vh", // -640
    },
    0
  )
  .to(
    ".screen-f",
    {
      top: "-800vh", // -770
    },
    0
  )
  .to(
    ".screen-g",
    {
      top: "-840vh", // ~ -950 ~
    },
    0
  );

// scroll _horizontal

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

// section thunder

gsap.from(".thunder-left", {
  scrollTrigger: {
    trigger: ".thunders",
    start: "140px center",
    end: "170px center",
    scrub: 1,
    markers: true,
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
    markers: true,
  },
  opacity: 0,
  left: "80vw",
  top: "-600px",
});
