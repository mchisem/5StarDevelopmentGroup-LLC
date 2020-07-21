// variable
var nav = $("#navbar-nav");
var burger = $("#burger");
var appear = $(".appear");

const navAppear = () => {
     burger.on('click', () => {
        // console.log("help");
        $(nav).toggleClass("appear", appear);
     });
}

navAppear();