import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

// let slidingtl = gsap.timeline({
//   scrolltrigger: {
//     trigger: 'sliding-section',
//     start: 'top top',
//     end: "1000",
//     markers: true,
//     pin: true,
//     scrub: 1,
//   },
// });

// slidingtl.fromTo('orangebblockcontainer',{
//   x: -800,
// },{
// x: 0,

// }
// )

gsap.from('.orangeblockcontainer',{
  x: -200,
  opacity: 0, 
  scrollTrigger: {
    trigger: 'sliding-section',
    start: 'top top',
    end: "bottom bottom",
    markers: true,
    ease: "Power2.in",
    toggleActions: "play pause reverse reverse",
  }
})

gsap.from('.rightsidetext',{
  x: 200,
  opacity: 0, 
  scrollTrigger: {
    trigger: 'sliding-section',
    start: 'top top',
    end: "bottom bottom",
    markers: true,
    toggleActions: "play pause reverse reverse",
  }
})

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.flower-section',
    start: 'top top',
    end: "6000",
    markers: true,
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