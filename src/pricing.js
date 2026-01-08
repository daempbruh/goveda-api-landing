import './main.js'
import './style.css'
import './pricing.css'

document.addEventListener('DOMContentLoaded', () => {
    // Calculator Logic
    const sliders = document.querySelectorAll('.calc-slider');
    const totalDisplay = document.querySelector('.total-credits');

    function calculateTotal() {
        let total = 0;
        sliders.forEach(slider => {
            const val = parseFloat(slider.value);
            const cost = parseFloat(slider.dataset.cost);
            const display = slider.nextElementSibling;

            // Format number with commas
            if (display) {
                display.textContent = `${val.toLocaleString()} units`;
            }

            total += val * cost;
        });

        // Format total with commas
        totalDisplay.textContent = `${Math.ceil(total).toLocaleString()} Credits`;
    }

    sliders.forEach(slider => {
        slider.addEventListener('input', calculateTotal);
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

            // Update simple link to real page
            const accountLink = userDropdown.querySelector('a.dropdown-item');
            if (accountLink) accountLink.href = '../account/';
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

});
