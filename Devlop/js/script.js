// variable
var nav = $("#navbar-nav");
var burger = $("#burger");
var navLinks = $(".nav-link");
var navActive = $(".nav-active");
var appear = $(".appear");

const navAppear = () => {
     burger.on('click', () => {
        // console.log("help");
        $(nav).toggleClass("appear", appear);
     });
}

navAppear();