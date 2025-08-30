// Typing animation
const typingText = document.querySelector(".typing");
const textArray = ["Web Developer", "Designer", "Programmer", "Tech Enthusiast"];
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
    typingText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 200);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(type, 200);
});

ScrollReveal().reveal('.profile-pic, .hero h1, .social-links, .btn', { delay: 200, duration: 1000, origin: 'top', distance: '50px' });
ScrollReveal().reveal('.about-img, .about-text', { delay: 300, duration: 1000, origin: 'bottom', distance: '50px' });
//ScrollReveal().reveal('.cert-card', { delay: 200, duration: 800, interval: 200, origin: 'bottom', distance: '30px' });
//ScrollReveal().reveal('.project-card', { delay: 200, duration: 800, interval: 200, origin: 'bottom', distance: '30px' });
ScrollReveal().reveal('.contact form', { delay: 300, duration: 1000, origin: 'right', distance: '50px' });
