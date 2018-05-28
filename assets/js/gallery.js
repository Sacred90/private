import "../css/main.css";
import "../css/gallery.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

window.onload = () => {
  var goToAbout = document.getElementById("go_to_about");
  var goToMain = document.getElementById("go_to_main");
  var body = document.getElementsByTagName("BODY")[0];

  try {
    goToAbout.addEventListener("click", () => {
      goToLocation("./about.html");
    });
  } catch (err) {
    console.error(err);
  }

  try {
    goToMain.addEventListener("click", () => {
      goToLocation("./index.html");
    });
  } catch (err) {
    console.error(err);
  }

  function goToLocation(location) {
    body.classList.add("overlay");

    setTimeout(function() {
      window.location.href = location;
    }, 2000);
  }

  // Open the Modal
  function openModal() {
		debugger
    document.getElementById("myModal").style.display = "block";
  }

  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  }
};
