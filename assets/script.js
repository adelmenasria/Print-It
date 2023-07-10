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

// L'index du slide en cours, ce qui signifie aussi que la 1ère image du tableau slides sera affichée au chargement de la page
let indexSlide = 0


/* rightArrow addEventlistener */
rightArrow.addEventListener('click', function() {
  indexSlide++; // Incrémentation pour passer à la slide suivante
  if (indexSlide >= slides.length) {
    indexSlide = 0
  }
  updateSlide()
});

/* leftArrow addEventlistener */
leftArrow.addEventListener('click', function() {
  indexSlide--; // Décrémentation pour revenir à la slide précédente
  if (indexSlide < 0) { // Si le slide est inférieur à zéro
    indexSlide = slides.length - 1; // Alors le slide affiché doit être le dernier
  }
  updateSlide()
});


// Mise à jour de l'affichage du slide en fonction de l'index actuel currentSlide
function updateSlide() {
  // Récupère l'objet slide correspondant à l'index currentSlide
  const slide = slides[indexSlide] // slides[1]
  img.src = "./assets/images/slideshow/" + slide.image // Met à jour l'image du slide
  tagLine.innerHTML = slide.tagLine // Met à jour le texte du slide

  // Mise à jour du bullet point actif
  const dots = dotsContainer.querySelectorAll('.dot');
  // Parcours tous les bullet points
  for (let i = 0; i < dots.length; i++) {
    const dot = dots[i]
    // Vérifie si l'index du bullet point correspond à l'index du slide actuel
    if (i === indexSlide) {
      // Si c'est le cas, ajoute la classe 'dot_selected' pour indiquer le point actif
      dot.classList.add('dot_selected')
    } else {
      // Sinon, retire la classe 'dot_selected'
      dot.classList.remove('dot_selected')
    }
  }
}

// Ajout des bullet points en fonction du nombre de slide
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('div')
  dot.classList.add('dot')
  dotsContainer.appendChild(dot)
}

// Ajoute la classe "dot_selected" au premier enfant du conteneur dotsContainer
dotsContainer.children[0].classList.add('dot_selected')

// Affiche le premier slide au chargement de la page
updateSlide()