const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button
function prevButton(){
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
}


//image slider previous button
function nextButton(){
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
}

nextButton()
prevButton()

document.addEventListener("DOMContentLoaded", function() {
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const PopupOverlay = document.querySelector('.image-overlay');
  const PopupContent = document.querySelector('.popup-content img');
  const PopupCaption = document.querySelector('.popup-caption');
  const PopupClose = document.querySelector('.popup-close');

  // Function to open the Popup
  function openPopup(imageSrc, captionText) {
      PopupOverlay.style.display = 'flex'; // Show the Popup overlay
      PopupContent.src = imageSrc; // Set the source of the image
      PopupCaption.innerHTML = captionText; // Set the caption text
  }

  // Function to close the popup
  function closePopup() {
      PopupOverlay.style.display = 'none'; // Hide the popup overlay
  }

  // Add click event listeners to gallery images
  galleryItems.forEach(item => {
      item.addEventListener('click', () => {
          const imageSrc = item.src; // Get the source of the clicked image
          const captionText = item.getAttribute('data-caption'); // Get the caption text
          openPopup(imageSrc, captionText); // Open the popup with the clicked image and caption
      });
  });

  // Add click event listener to close button
  PopupClose.addEventListener('click', closePopup);
});

const toggleModeDark = document.getElementById("dark-mode");
const toggleModeLight = document.getElementById("light-mode");
const toggleFontUp = document.getElementById("font-size-up");
const toggleFontDown = document.getElementById("font-size-down");
const toggleFontReset = document.getElementById("font-size-reset");
const body = document.body;
const header = document.querySelector('header');

toggleModeDark.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  header.classList.toggle('dark-mode');
  body.classList.remove('light-mode');
  header.classList.remove('light-mode');
});

toggleModeLight.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  header.classList.toggle('light-mode');
  body.classList.remove('dark-mode');
  header.classList.remove('dark-mode');
});

toggleModeLight.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  header.classList.toggle('light-mode');
  body.classList.remove('dark-mode');
  header.classList.remove('dark-mode');
});

toggleFontUp.addEventListener('click', () => {
  body.classList.toggle('font-up');
  header.classList.toggle('font-up');
  body.classList.remove('font-down');
  header.classList.remove('font-down');
});

toggleFontDown.addEventListener('click', () => {
  body.classList.toggle('font-down');
  header.classList.toggle('font-down');
  body.classList.remove('font-up');
  header.classList.remove('font-up');
});

toggleFontReset.addEventListener('click', () => {
  body.classList.remove('font-up');
  header.classList.remove('font-up');
  body.classList.remove('font-down');
  header.classList.remove('font-down');
});

