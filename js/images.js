// navbar function
// variable
var navBar = $("#navbar-nav");
var burger = $("#burger");
var appear = $(".appear");

burger.on('click', () => {
  $(navBar).toggleClass("appear", appear);
  event.preventDefault();
});

// lightbox function
// Variables
var modal = $("#back")
var span = $("#close")
var images = $(".image")
var modalImg = $(".modal-content")
var content = $("#content")
var parent = $(".container")
var nav = $("#main-header")


$(parent).on("click", event => {
  if(event.target.className === "image") {
    // console.log(event.target)
    $(modal).css("display", "block");
    $(modalImg).attr("src", event.target.src)
    $(content).removeClass("hide");
    $(span).removeClass("hide");  
    // $(nav).addClass("hide");

    event.preventDefault();
  }
})

// When the user clicks on (x), close the modal
$(span).on("click", () => {
    $(modal).css("display", "none");
    $(content).addClass("hide");
    // $(nav).removeClass("hide");
});
