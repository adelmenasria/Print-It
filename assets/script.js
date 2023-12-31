const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
  }
];


// Variables
const img = document.querySelector('.banner-img')
const tagLine = document.querySelector('p')
const dotsContainer = document.querySelector('.dots')
const rightArrow = document.querySelector('.arrow_right')
const leftArrow = document.querySelector('.arrow_left')

// The index of the current slide, which also means that the 1st image of the slides table will be displayed when the page load
let indexSlide = 0


/* rightArrow addEventlistener */
rightArrow.addEventListener('click', function() {
  indexSlide++; // Increment to go to the next slide
  if (indexSlide >= slides.length) {
    indexSlide = 0
  }
  updateSlide()
});

/* leftArrow addEventlistener */
leftArrow.addEventListener('click', function() {
  indexSlide--; // Decrement to return to the previous slide
  if (indexSlide < 0) { // If the slide is less than zero
    indexSlide = slides.length - 1; // then the displayed slide must be the last one
  }
  updateSlide()
});

// Update the slide: img, tagLine and .dot_selected
function updateSlide() {
  const slide = slides[indexSlide] // Retrieves the slide object corresponding to the index indexSlide
  img.src = "./assets/images/slideshow/" + slide.image
  tagLine.innerHTML = slide.tagLine

  // Update active bullet points
  const dots = dotsContainer.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    if (i === indexSlide) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
    }
  });
}

// Calculates bullet points based on the number of slides
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('div')
  dot.classList.add('dot')
  dotsContainer.appendChild(dot)
}

// Add .dot_selected to the first child of the dotsContainer
dotsContainer.children[0].classList.add('dot_selected')

// Display the first slide when page loading
updateSlide()