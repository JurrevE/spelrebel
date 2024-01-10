import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let svgCircle = document.getElementById('svg-circle')
let svgSection = document.getElementById('svg-section')

// gsap.to('#svg-circle', {
//     scrollTrigger: {
//       trigger: '#svg-circle',
//       markers: true,
//       pin: '#svg-section',
//       start: "center center",
//       end: "+=500",
//       scrub: 2,
//     },
//     scale: 10,
//     opacity: 1
//   });


gsap.to(".text-h2", {
    scrollTrigger: {
      trigger: ".text-test",
      start: 'top top',
      end: "+=90vh",
      scrub:true,
      pin: ".text-test",
    },
    scale: 10
  });

  gsap.to(".svg-circle", {
    scrollTrigger: {
      trigger: ".svg-section",
      start: 'center center',
      end: "+=100vh",
      scrub:true,
      pin: ".svg-section",
    },
    scale: 10
  });
