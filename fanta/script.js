var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#fanta",{
    top: "120%",
    left: "0%"
}, 'orange')
tl.to("#orange-cut",{
    top:"160%",
    left: "23%"
}, 'orange')
tl.to("#orange",{
    width: "15%",
    top:"160%",
    right: "10%"
}, 'orange')
tl.to("#leaf",{
    top:"110%",
    rotate: "130deg",
    left: "70%"
}, 'orange')
tl.to("#leaf2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')

tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from("#pepsi",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#orange-cut",{
    width:"18%",
    left: "42%",
    top: "204%"
}, 'ca')
tl2.to("#fanta",{
    width:"35%",
    top: "210%",
    left: "33%",
}, 'ca')

var cur = document.querySelector("#cursor")

let cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
        x: dets.clientX,
        y: dets.clientY,
        duration: 0.2,
        ease: "power2.out"
    });
});
let wrapper_ani = document.querySelector(".animation-wrapper");
let text = document.querySelector(".fanta-text h1");

gsap.to(text, {
  duration: 3,
  opacity: 0,
  ease: "power2.out",
});

gsap.to(wrapper_ani, {
  duration: 3,
  opacity: 0,
  ease: "power2.out",
  delay: 2, // wait for text to fade
  onComplete: () => {
    wrapper_ani.style.display = "none"; // fully remove it from layout
  }
});
gsap.from("#about .about-video video", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    x: -100,
    duration: 1
  });
  
  gsap.from("#about .about-text", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    x: 100,
    duration: 1
  });
  
