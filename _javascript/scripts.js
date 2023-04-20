// JavaScript Document

// Navbar Mobile

let menuIcon = document.querySelector("#menu-icon-container");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("change");
    navbar.classList.toggle("active");
};

// Sticky Header

window.onscroll = () => {
    let header = document.querySelector(".header");

    header.classList.toggle("sticky", window.scrollY > 100);
};

// Make it Rain

var makeItRain = function () {
    //clear out everything
    $(".rain").empty();

    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 100) {
        //couple random numbers to use for various randomizations
        //random number between 98 and 1
        var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
        //random number between 5 and 2
        var randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
        //increment
        increment += randoFiver;
        //add in a new raindrop with various randomizations to certain CSS properties
        drops +=
            '<div class="drop" style="left: ' +
            increment +
            "%; bottom: " +
            (randoFiver + randoFiver - 1 + 100) +
            "%; animation-delay: 0." +
            randoHundo +
            "s; animation-duration: 0.5" +
            randoHundo +
            's;"><div class="stem" style="animation-delay: 0.' +
            randoHundo +
            "s; animation-duration: 0.5" +
            randoHundo +
            's;"></div><div class="splat" style="animation-delay: 0.' +
            randoHundo +
            "s; animation-duration: 0.5" +
            randoHundo +
            's;"></div></div>';
        backDrops +=
            '<div class="drop" style="right: ' +
            increment +
            "%; bottom: " +
            (randoFiver + randoFiver - 1 + 100) +
            "%; animation-delay: 0." +
            randoHundo +
            "s; animation-duration: 0.5" +
            randoHundo +
            's;"><div class="stem" style="animation-delay: 0.' +
            randoHundo +
            "s; animation-duration: 0.5" +
            randoHundo +
            's;"></div><div class="splat" style="animation-delay: 0.' +
            randoHundo +
            "s; animation-duration: 0.5" +
            randoHundo +
            's;"></div></div>';
    }

    $(".rain.front-row").append(drops);
    $(".rain.back-row").append(backDrops);
};

makeItRain();

// UGLY

let clouds1 = document.getElementById("clouds1");
let ceiling = document.getElementById("ceiling");
let clouds2 = document.getElementById("clouds2");
let town1 = document.getElementById("town1");
let town2 = document.getElementById("town2");
let boat = document.getElementById("boat");
let deck = document.getElementById("deck");

window.addEventListener("scroll", function () {
    let value = window.scrollY;

    clouds1.style.top = value * 0.85 + "px";
    ceiling.style.top = -150 + value * 0.75 + "px";
    clouds2.style.top = value * 0.65 + "px";
    town1.style.top = value * 0.5 + "px";
    town2.style.top = value * 0.15 + "px";
    boat.style.top = value * -0.03 + "px";
    deck.style.top = value * -0.05 + "px";
});

// Scroll Reveal

ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal(".top-scroll", { origin: "top" });
ScrollReveal().reveal(".btm-scroll", { origin: "bottom" });
ScrollReveal().reveal(".left-scroll", { origin: "left" });
ScrollReveal().reveal(".right-scroll", { origin: "right" });
