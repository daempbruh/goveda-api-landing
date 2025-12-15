import './style.css'
import './pricing.css'

document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.toggle-btn');
    const sections = {
        'individual': document.getElementById('individual-grid'),
        'team': document.getElementById('team-grid'),
        'api': document.getElementById('api-grid')
    };

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const target = toggle.dataset.target;

            // Update active state
            toggles.forEach(t => t.classList.remove('active'));
            toggle.classList.add('active');

            // Show proper section
            Object.values(sections).forEach(section => {
                if (section) section.style.display = 'none';
            });

            if (sections[target]) {
                if (target === 'api') {
                    sections[target].style.display = 'block'; // API grid wraps section+calc
                } else {
                    sections[target].style.display = 'grid';
                }
            }
        });
    });

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
});
