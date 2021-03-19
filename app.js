// Intro
const tl = gsap.timeline({defaults: {ease: "power.out"}});

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro-contents", { y: "-100%", duration: 1,}, "-=1");
tl.fromTo(".scroll", {opacity: 0}, {opacity: 1, duration: 1 })

// menu
const menuBar = document.getElementById("menu-bar");
const menuList = document.getElementById("menu-list");

menuBar.addEventListener("click", ()=> {
    menuBar.classList.toggle("active");
    menuList.classList.toggle("active");
});

const menuTop = document.getElementById("menu-top");
const menuWorks = document.getElementById("menu-works");
const menuAbout = document.getElementById("menu-about");

menuTop.addEventListener("click", ()=> {
    menuBar.classList.remove("active");
    menuList.classList.remove("active");
})
menuWorks.addEventListener("click", ()=> {
    menuBar.classList.remove("active");
    menuList.classList.remove("active");
})
menuAbout.addEventListener("click", ()=> {
    menuBar.classList.remove("active");
    menuList.classList.remove("active");
})


// scroll animation

const targetElement = document.querySelectorAll(".animationTarget");
document.addEventListener("scroll", ()=> {
    for (let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * 0.4
        if(window.innerHeight > getElementDistance) {
            targetElement[i].classList.add("show")
        }
    }
})
