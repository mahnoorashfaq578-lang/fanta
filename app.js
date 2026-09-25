var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"70% 50%",
    scrub:true

}})
tl.to("#fanta",{
 top:"120%",
 left:"3%"
},"orange")

tl.to("#cut-orange",{
    top:"160%",
    left:"23%"
},'orange')

tl.to("#orange",{
    top:"170%",
    width:"15%",
    right:"10%"
},'orange')

tl.to("#leaf",{
    top:"110%",
    left:"80%",
    rotate:"130deg"
},'orange')

tl.to("#leaf1",{
    top:"110%",
    left:"0%",
    rotate:"130deg"
},'orange')

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "20% 50%",
        scrub: true
    }
});

tl2.fromTo(".lemon1",
    {
        rotate: -90,
        left: "-20%",
        top: "20%"
    },
    {
        rotate: 0,
        left: "50%",
        top: "-22%"
    },
    "ca"
);

tl2.fromTo("#sprite",
    {
        rotate: -90,
        left: "20%"
    },
    {
        rotate: 0,
        left: "50%"
    },
    "ca"
);

tl2.fromTo(".cards:nth-child(3) .lemon",
    {
        rotate: 90,
        left: "80%",
        top: "20%"
    },
    {
        rotate: 0,
        left: "50%",
        top: "-22%"
    },
    "ca"
);

tl2.fromTo("#Cocacola",
    {
        rotate: 90,
        left: "80%"
    },
    {
        rotate: 0,
        left: "50%"
    },
    "ca"
);

tl2.to("#cut-orange",{
    
    left:"43%",
    top:"210%"
},'ca')

tl2.to("#fanta",{
   
      scale: 0.7,
    left:"33%",
    top:"205%"
},'ca')



gsap.from("nav > a", {
    y: -40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
});

gsap.from(".cntr-nav a", {
    y: -30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power3.out"
});

gsap.from("nav i", {
    y: -30,
    opacity: 0,
    rotation: -90,
    duration: 0.7,
    delay: 0.5,
    ease: "back.out(1.7)"
});


gsap.from(".right-two h1", {
    rotateX: 90,
    y: -80,
    opacity: 0,

    duration: 1.4,
    ease: "back.out(1.5)",

    scrollTrigger: {
        trigger: ".two",
        start: "top 75%",
        toggleActions: "play none none reverse"
    }
});


gsap.from(".right-two p", {
    x: 80,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".two",
        start: "top 65%",
        toggleActions: "play none none reverse"
    }
});




