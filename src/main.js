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

// Auth UI Logic
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const authButtons = document.getElementById('auth-buttons');
const userMenu = document.getElementById('user-menu');
const userMenuBtn = document.getElementById('user-menu-btn');
const userDropdown = document.getElementById('user-dropdown');

if (loginBtn && authButtons && userMenu) {
  // Mock Login
  loginBtn.addEventListener('click', () => {
    authButtons.style.display = 'none';
    userMenu.style.display = 'flex';
  });

  // Mock Logout
  logoutBtn.addEventListener('click', () => {
    userMenu.style.display = 'none';
    authButtons.style.display = 'flex';
    userDropdown.classList.remove('show');
  });

  // Toggle User Dropdown
  userMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    userDropdown.classList.toggle('show');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!userMenu.contains(e.target)) {
      userDropdown.classList.remove('show');
    }
  });
}
