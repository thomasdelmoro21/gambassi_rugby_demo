let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
  
}

function showPage() {
  $(".hider").slideToggle(1000);
}

function showHomePage() {
  $(".hider").slideToggle(2000);

  showSlides();
}

// TEAMS LIST ANIMATION

$(document).ready(function() {
  var teams_number = $(".teams-list").children().length;
  var rotated = new Array(teams_number).fill(false);

  $(".teams-item").on('click', function() {
      var idx = $(this).index();

      if (rotated[idx] == false) {
          $(this).children(":first").css({
              "-webkit-transform": "rotate(90deg)",
              "-moz-transform": "rotate(90deg)",
              "transform": "rotate(90deg)" 
          });
          $(this).children().eq(2).slideToggle();
          rotated[idx] = true;
      } else {
          $(this).children(":first").css({
              "-webkit-transform": "rotate(0deg)",
              "-moz-transform": "rotate(0deg)",
              "transform": "rotate(0deg)" 
          });
          $(this).children().eq(2).slideToggle();
          rotated[idx] = false;
      }
  });
});