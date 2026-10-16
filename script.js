// Interactive JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  const contactForm = document.getElementById('contactForm');

  // Responsive Mobile Navigation Toggle
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Auto-close Menu when Navigation Link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  });

  // Contact Form Submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for reaching out! Your message has been received.');
      contactForm.reset();
    });
  }
});