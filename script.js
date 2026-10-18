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
document.addEventListener('keydown', (event) => {
  // Prevent F12
  if (event.key === 'F12') {
    event.preventDefault();
  }

  // Prevent Ctrl+Shift+I, Ctrl+Shift+J, and Ctrl+Shift+C
  if (event.ctrlKey && event.shiftKey && ['I', 'J', 'C', 'i', 'j', 'c'].includes(event.key)) {
    event.preventDefault();
  }

  // Prevent Ctrl+U (View Source)
  if (event.ctrlKey && (event.key === 'u' || event.key === 'U')) {
    event.preventDefault();
  }
});
setInterval(() => {
  (function() {
    function block() {
      debugger;
    }
    block();
  })();
}, 100);
