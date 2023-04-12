// JavaScript Document

var countDownDate = new Date("April, 28 2023 06:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

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
    ceiling.style.top = -200 + value * 0.75 + "px";
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

const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");

//Song Titles
const songs = [
    "01 Cali Bay Area Love",
    "02 Chinatown",
    "03 Carnage",
    "04 Feel Good",
    "05 For The F",
    "06 Giggin",
    "07 Kss Kss",
    "08 On Tha Real",
    "09 Underground",
    "10 Something U Said",
    "11 Stoopid",
    "12 Summerz",
    "13 Fly",
    "14 Tenderloins",
    "15 Ese Ose",
    "16 Release",
    "17 Despierto",
    "18 He7vn",
    "19 Zombi",
    "20 Mercury Theme",
    "21 Salt Theme",
    "22 Tarzan Boy Remake",
];

//Keep track of songs
let songIndex = 0;

//Initially load song into DOM
loadSong(songs[songIndex]);

//Update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `_assets/_audio/${song}.mp3`;
    cover.src = `_assets/_a-img/${song}.png`;
}

function playSong() {
    var img = document.getElementById("playButton");
    if (img.src.match(/play\.png$/)) {
        // if the image is currently the play button
        img.src = "_assets/_music-player/pause.png"; // change the image source to the pause button
        img.alt = "pause"; // update the image alt text
        img.id = "pauseButton"; // update the image ID to reflect that it's now a pause button
    } else {
        img.src = "_assets/_music-player/play.png"; // change the image source back to the play button
        img.alt = "play"; // update the image alt text
        img.id = "playButton"; // update the image ID to reflect that it's now a play button again
    }
    musicContainer.classList.add("play");
    audio.play();
}

function pauseSong() {
    var img = document.getElementById("pauseButton");
    if (img.src.match(/pause\.png$/)) {
        // if the image is currently the play button
        img.src = "_assets/_music-player/play.png"; // change the image source to the pause button
        img.alt = "play"; // update the image alt text
        img.id = "playButton"; // update the image ID to reflect that it's now a pause button
    } else {
        img.src = "_assets/_music-player/pause.png"; // change the image source back to the play button
        img.alt = "pause"; // update the image alt text
        img.id = "pauseButton"; // update the image ID to reflect that it's now a play button again
    }

    musicContainer.classList.remove("play");
    audio.pause();
}

function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

function nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

//Event Listeners
playBtn.addEventListener("click", () => {
    const isPlaying = musicContainer.classList.contains("play");

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateProgress);

progressContainer.addEventListener("click", setProgress);

audio.addEventListener("ended", nextSong);
