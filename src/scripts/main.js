import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

console.log(gsap)

// let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.flower-section',
//       start: 'top top',
//       end: "3000",
//       markers: true,
//       pin: '.flower-section',
//       scrub: 1,
//     }
//   })

//   tl.to('.flowerImg', {
//     rotation: '-90' }, autoAlpha:0);
//   tl.to('flowerImg', {
//     rotatation: 180
//   })
  
  
  
  
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.flower-section',
    start: 'top top',
    end: "3000",
    markers: true,
    pin: '.flower-section',
    scrub: 0.15, // Adjust the scrub value to control the smoothness
    snap: {
      snapTo: 'labels', // Optional: Use snap to labels for a better stopping point
      duration: 0.2 // Optional: Adjust the snap duration
    }
  }
});

// Define the number of rotations (360 degrees) and the pause duration
const rotations = 4; // 4 rotations (90 degrees each)
const pauseDuration = 1; // 1 second pause duration

// Create individual tweens for each 90-degree rotation and pause
for (let i = 0; i < rotations; i++) {
  // Rotate by 90 degrees
  tl.to('.flowerImg', {
    rotation: `+=90`,
    duration: 1, // Animation duration for the rotation
    ease: 'power2.inOut'
  });

  // Pause for the specified duration
  tl.to({}, {
    duration: pauseDuration,
    onComplete: () => {} // Empty onComplete callback for pause
  });
}
