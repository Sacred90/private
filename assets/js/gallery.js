import "../css/main.css";
import "../css/gallery.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


//images
import * as bear from '../images/bear.svg';
import * as bear2 from '../images/bear2.svg';
import * as blindWoman from '../images/blindWoman.svg';
import * as grzybek from '../images/grzybek.svg';
import * as kogut from '../images/kogut.svg';
import * as lis from '../images/lis.svg';
import * as man from '../images/man.svg';
import * as man2 from '../images/man2.svg';
import * as pelikan from '../images/pelikan.svg';
import * as rabitWoman from '../images/rabitWoman.svg';
import * as rhino from '../images/rhino.svg';
import * as rhino1 from '../images/rhino1.svg';
import * as rhino2 from '../images/rhino2.svg';
import * as rhino3 from '../images/rhino3.svg';
import * as rhino4 from '../images/rhino4.svg';
import * as robaczek from '../images/robaczek.svg';
import * as sowa from '../images/sowa.svg';
import * as szczur from '../images/szczur.svg';
import * as szczury from '../images/szczury.svg';


window.onload = () => {
  var goToAbout = document.getElementById("go_to_about");
  var goToMain = document.getElementById("go_to_main");
  var body = document.getElementsByTagName("BODY")[0];
  var listOfImages = document.getElementById('rig');

  const images = [
    bear,
    bear2,
    blindWoman,
    grzybek,
    kogut,
    lis,
    man,
    man2,
    pelikan,
    rabitWoman,
    rhino,
    rhino1,
    rhino2,
    rhino3,
    rhino4,
    robaczek,
    sowa,
    szczur,
    szczury,
  ]

  images.forEach(image => {
    innerImg(image);
  })

  function innerImg (image) {
    const idOfImages = image.default.substring(image.default.indexOf('/') + 1, image.default.indexOf('-'));

    listOfImages.innerHTML = listOfImages.innerHTML +
      `<li>
        <a class="rig-cell">
          <img class="rig-img" src="../${image.default}">
          <span class="rig-overlay"></span>
          <span class="rig-text">Proin Scelerisque</span>
        </a>
      </li>`
  }


  // add events handler for clik, each of images
  for(let elem of document.getElementsByClassName('rig-cell')) {
    elem.addEventListener("click", () =>{
      openModal();
      currentSlide(1)
    });
  }

  document.getElementsByClassName('close cursor')[0].addEventListener("click", () => {
    closeModal();
  });




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
};

// Open the Modal
function openModal() {
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
