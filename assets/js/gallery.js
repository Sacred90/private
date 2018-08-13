import "../css/main.css";
import "../css/gallery.css";

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

let slideIndex = 1;

window.onload = () => {
  const goToAbout = document.getElementById("go_to_about");
  const goToMain = document.getElementById("go_to_main");
  const body = document.getElementsByTagName("BODY")[0];
  const listOfImages = document.getElementById('rig');
  const modalBody = document.getElementsByClassName('modal-content')[0];

  const images = [
    sowa,
    robaczek,
    grzybek,
    lis,
    bear,
    blindWoman,
    kogut,
    pelikan,
    rabitWoman,
    man,
    man2,
    szczur,
    rhino2,
    rhino3,
    rhino4,
    rhino1,
    szczury,
    bear2,
    rhino
  ]

  images.forEach(image => {
    innerImg(image);
  })

  function innerImg (image) {

    listOfImages.innerHTML = listOfImages.innerHTML +
      `<li>
        <a class="rig-cell">
          <img class="rig-img" src="../${image.default}">
          <span class="rig-overlay"></span>
          <span class="rig-text"></span>
        </a>
      </li>`

    modalBody.innerHTML = modalBody.innerHTML +
      `<div class="mySlides">
        <img class = "modalImage" src="../${image.default}"">
      </div>`
  }

  // ------------------- ALL EVENT HANDLERS -------------------------------
  // add events handler for clik, each of images
  document.querySelectorAll('.rig-cell').forEach((element, index) => {
    element.addEventListener("click", () =>{
      openModal();
      currentSlide(index + 1);
    });
  });

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
// ------------------------------------------------------------------
  showSlides(slideIndex);
};


// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "flex";

  const previousArrow = document.getElementsByClassName('prev')[0];
  const nextArrow = document.getElementsByClassName('next')[0];
  try {
    previousArrow.addEventListener("click", () => {
      plusSlides(-1);
    });
  } catch (err) {
    console.error(err);
  }

    try {
      nextArrow.addEventListener("click", () => {
        plusSlides(1);
      });
    } catch (err) {
      console.error(err);
    }

    document.addEventListener('keydown', handleArrowsKey);
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";

  document.removeEventListener('keydown', handleArrowsKey);
}

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
  slides[slideIndex - 1].style.display = "flex";
}

function handleArrowsKey(event) {
  if (event.keyCode == 37) {
    plusSlides(-1);
  }

  if (event.keyCode == 39) {
    plusSlides(1);
  }

  if (event.keyCode == 27) {
    closeModal();
  }
}
