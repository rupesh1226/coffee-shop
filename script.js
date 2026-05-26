const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const flavorText = document.getElementById("flavorText");
const moodButtons = document.querySelectorAll(".mood-buttons button");

moodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    flavorText.textContent = button.dataset.flavor;
  });
});

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const closeLightbox = document.querySelector(".close-lightbox");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightboxImage.src = image.src;
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove("active");
  }
});