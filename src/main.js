import './style.css'

console.log('Goveda OpenAPI Landing Page Initialized');

// Simple interaction for the mobile menu (future enhancement) or smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
