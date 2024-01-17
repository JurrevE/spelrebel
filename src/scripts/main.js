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

gsap.from('.orangeblockcontainer',{
  x: -200,
  delay: 0.5,
  opacity: 0, 
  scrollTrigger: {
    trigger: 'sliding-section',
    start: 'top top',
    end: "bottom bottom",
    ease: "Power2.in",
    toggleActions: "play pause reverse reverse",
  }
})

gsap.from('.rightsidetext',{
  x: 200,
  delay: 0.5,
  opacity: 0, 
  scrollTrigger: {
    trigger: 'sliding-section',
    start: 'top top',
    end: "bottom bottom",
    toggleActions: "play pause reverse reverse",
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
