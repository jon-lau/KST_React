'use strict';
var slideIndex = 1;
var sliding = 0;
var f;
showSlides(slideIndex);
function plusSlides(n) {
  sliding = 1;
  clearTimeout(f);
  showSlides(slideIndex += n);
  f = setTimeout(sliding = 0, 5000);
  f = setTimeout(showSlides, 5000);
}

function currentSlide(n) {
  sliding = 1;
  clearTimeout(f);
  showSlides(slideIndex = n);
  f = setTimeout(sliding = 0, 5000);
  f = setTimeout(showSlides, 5000);
}

function showSlides(n) {
  //alert('showslides('+ n +')\nslideIndex='+slideIndex);
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  if(sliding == 0){
    //sliding = 1;
    f = setTimeout(showSlides, 3000); // Change image every 5 seconds
  }
}

// var slideIndex = 0;
// showSlides();
//
// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     slides[slideIndex-1].style.display = "block";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
