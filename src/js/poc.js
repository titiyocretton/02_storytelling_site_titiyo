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

// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: ".section-parallax",
//       start: "top top",
//       // le chiffre de end indiquera la durée du parallax, tout devra se caler dessus
//       end: "4000px bottom",
//       scrub: 0.3, //le chiffre donne un effet plus lisse à l'animation
//       pin: true,
//       // markers: true,
//       ease: "linear", //je sais pas si cette ligne est utile
//     },
//   })
//   // le premier screen à animer est le dernier
//   // vérifié en le faisant que le bas de l'image arrive pile en bas de la section quand l'animation est finit,
//   // puis vous pourrez animer les autres screen
//   .to(
//     ".screen-a",
//     {
//       top: "-1700px",
//     },
//     0
//   )
//   .to(
//     ".screen-b",
//     {
//       top: "-2200px", //-1700px - 500px -> soyez regulier dans les px que vous elevez, mais vous pouvez choisir le nombre à enlever
//     },
//     0
//   )
//   .to(
//     ".screen-c",
//     {
//       top: "-2700px", //2200px - 500px
//     },
//     0
//   )
//   .to(
//     ".screen-d",
//     {
//       top: "-3160px", // 2700px - ~500px
//     },
//     0
//   );

// scroll horizontal
// attention !, il faut mettre ce code après la parallax qu'il y a avant, sinon sa bug

// gsap.to(".slider-track", {
//   scrollTrigger: {
//     trigger: ".slider-mask",
//     // start c'est le moment ou l'animation commence dans le site,
//     // le premier top c'est par rapport à l'élément concerné,
//     // le deuxieme c'est par rapport à la page
//     start: "top top",
//     // l'emplacement de end change la vitesse du scroll horizontal,
//     // plus le chiffre à % est grand, plus il sera lent
//     end: "+=300%",
//     pin: true,
//     scrub: true,
//     // markers: true,
//   },
//   // x définit jusqu'ou la section va a droite, on peut le calculer (mais j'ai pas compris comment) ou faire à taton, bonne chance !
//   x: "-75%",
//   ease: "sine.inOut",
// });

//bestiole qui tombe

// // ici je ralenti le screen a, pour que le plan au dessus soit plus rapide
// gsap.to(".case-fixed", {
//   scrollTrigger: {
//     trigger: ".case-fixed",
//     // placer stard à l'endroit ou screen b commence a etre visible
//     start: "center center",
//     // placer end a l'endroit ou screen a n'est plus visible
//     end: "2000px center",
//     scrub: true,
//     // markers: true,
//   },
//   // chiffre du top changera la vitesse
//   top: "1800",
//   ease: "linear",
// });

// gsap.to(".case-1", {
//   scrollTrigger: {
//     trigger: ".case-1",
//     // placer stard à l'endroit ou screen c commence a etre visible
//     start: "-top bottom",
//     // placer end a l'endroit ou screen b n'est plus visible
//     end: "bottom top",
//     scrub: true,
//     markers: true,
//   },
//   // chiffre du top changera la vitesse
//   left: "-400",
//   ease: "linear",
// });

// gsap.to(".case-2", {
//   scrollTrigger: {
//     trigger: ".case-2",
//     // placer stard à l'endroit ou screen c commence a etre visible
//     start: "-top bottom",
//     // placer end a l'endroit ou screen b n'est plus visible
//     end: "bottom top",
//     scrub: true,
//     // markers: true,
//   },
//   // chiffre du top changera la vitesse
//   top: "500px",
//   ease: "linear",
// });
