import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);



let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.flower-section',
    start: 'top top',
    end: "6000",
    markers: true,
    pin: '.flower-section',
    scrub: 1 
  }
});

tl.to('.flowerImg', {
  rotate: 45,
  ease: "power2.in",

})

tl.to('.flowerImg', {
  rotate: 90,
  ease: "power2.out",
})

tl.to('.flowerImg', {
  rotate: 135,
  delay: 1.5,
  ease: "power2.in",
})

tl.to('.flowerImg', {
  rotate: 180,
  ease: "power2.out",
})

tl.to('.flowerImg', {
  rotate: 225,
  delay: 1.5,
  ease: "power2.in",
})
  tl.to('.flowerImg', {
  rotate: 270,
  ease: "power2.out",
})

// tl.from('.air-text',{
//   opacity: 0,
// } )

// tl.to('.air-text',{
//   opacity: 1,
//   delay: 1
// } )