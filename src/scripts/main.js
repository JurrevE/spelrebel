import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import 'atropos/css'
import Atropos from 'atropos';

// -------------- ATROPOS ----------------


// Initialize
const myAtropos = Atropos({
  el: '.my-atropos',
  activeOffset: 10,
  shadowScale: 0,
  onEnter() {
    console.log('Enter');
  },
  onLeave() {
    console.log('Leave');
  },
  onRotate(x, y) {
    console.log('Rotate', x, y);
  }
});


// -------------- GSAP -------------------

gsap.registerPlugin(ScrollTrigger);

gsap.from(".joyful", {
  x: -200,
  delay: 0,
  opacity: 0, 
  scrollTrigger: {
    trigger: '.short-info-section',
    start: 'top center',
    end: "bottom bottom",
    ease: "Power2.in",
  }
})

gsap.from(".top-info", {
  x: -200,
  delay: 0.3,
  opacity: 0, 
  scrollTrigger: {
    trigger: '.short-info-section',
    start: 'top center',
    end: "bottom bottom",
    ease: "Power2.in",
    
  }
})

gsap.from(".middle-info", {
  y: +200,
  delay: 0.5,
  opacity: 0, 
  scrollTrigger: {
    trigger: '.top-info',
    start: 'top center',
    end: "bottom bottom",
    ease: "Power2.in",
  }
})

gsap.from(".bottom-info", {
  x: 100,
  delay: 0.9,
  opacity: 0, 
  scrollTrigger: {
    trigger: '.middle-info',
    start: 'top 90%',
    end: "bottom bottom",
    ease: "Power2.in",
    
  }
})

gsap.from('.orangeblockcontainer',{
  x: -200,
  delay: 0.5,
  opacity: 0, 
  duration: 0.3,
  scrollTrigger: {
    trigger: '.sliding-section-content',
    start: 'top center',
    end: "bottom bottom",
    ease: "Power2.in",
    toggleActions: "play pause reverse",
  }
})

gsap.from('.rightsidetext',{
  x: 200,
  delay: 0.5,
  duration: 0.3,
  opacity: 0, 
  scrollTrigger: {
    trigger: '.sliding-section-content',
    start: 'top center',
    end: "bottom bottom",
    ease: "Power2.in",
    toggleActions: "play pause reverse", 
  }
})


let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.flower-section',
    start: 'top top',
    end: "6000",
    pin: true,
    scrub: 1,
  },
});

tl.fromTo('.flower-content',{
x: -800,


},
{
x: 0,
ease: "power2.in)",

}
)


tl.fromTo('.air-text', {
  opacity: 0,
},
{
  opacity: 1,
}
)

tl.to('.air-text',{
  opacity: 0,
  delay: 2,
})

tl.to('.flowerImg', {
  rotate: 45,
  ease: "power2.in",
})

tl.to('.flowerImg', {
  rotate: 90,
  ease: "power2.out",
})

tl.fromTo('.fire-text', {
  opacity: 0
},
{
  opacity: 1
}
)

tl.to('.fire-text', {
  opacity: 0,
  delay: 2,
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

tl.fromTo('.earth-text', {
  opacity: 0
},
{
  opacity: 1
}
)

tl.to('.earth-text', {
  opacity: 0,
  delay: 2,
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

tl.fromTo('.water-text', {
  opacity: 0
},
{
  opacity: 1
}
)

tl.to('.water-text', {
  opacity: 0,
  delay: 2,
})


gsap.from('.formbigdiv',{
  y: +100,
  opacity: 0, 
  scrollTrigger:  {
    trigger: '.signupformsection',
    start: 'top top',
    end: "bottom bottom",
    ease: "Power2.in",
    
  }
})

gsap.from('.partnerlogodiv',{
  y: +100,
  opacity: 0, 
  scrollTrigger: {
    trigger: '.partnerlogodiv',
    // start: '81% top',
    start: 'center bottom',
    end: "bottom bottom",

    
  }
})


gsap.from(".linkerkant", {
  x: -50,
  delay: 0,
  opacity: 0, 
  scrollTrigger: {
    trigger: '.footercontent',
    start: 'top center',
    end: "bottom bottom",
    ease: "Power2.in",
  }
})

gsap.from(".middel", {
  y: 40,
  delay: 0,
  opacity: 0, 
  scrollTrigger: {
    trigger: '.footercontent',
    start: 'top center',
    end: "bottom bottom",
    ease: "Power2.in",
  }
})

gsap.from(".rechterkant", {
  x: +50,
  delay: 0,
  opacity: 0, 
  scrollTrigger: {
    trigger: '.footercontent',
    start: 'top center',
    end: "bottom bottom",
    ease: "Power2.in",
  }
})