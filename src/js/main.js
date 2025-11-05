import { gsap } from "gsap";

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
      scrub: 0.3, //le chiffre donne un effet plus lisse à l'animation
      pin: true,
      markers: true,
      ease: "linear", //je sais pas si cette ligne est utile
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
