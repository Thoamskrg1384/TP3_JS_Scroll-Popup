window.addEventListener("scroll", () => {
  // Navbar effect
  if (window.scrollY > 20) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }

  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  // Image
  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";
  }

  // Popup
  if (scrollValue > 0.8) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
  }
});

// Fermeture définitive du popup
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Réduire la navbar quand on descend vers le site, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
