// script.js
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const body = document.body;
const dynamicTextSection = document.querySelector('.dynamic-text');

// Alternar el menú y el bloqueo de scroll
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    body.classList.toggle('no-scroll');
});

// Bloquear el scroll en la sección de dynamic-text
dynamicTextSection.addEventListener('mouseenter', () => {
    dynamicTextSection.classList.add('locked');
});

// Desbloquear el scroll cuando el mouse sale de la sección
dynamicTextSection.addEventListener('mouseleave', () => {
    dynamicTextSection.classList.remove('locked');
});
