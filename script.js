 // JavaScript za fiksnu navigaciju
 window.onscroll = function() {
    stickyNavbar();
};

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.scrollY === 0) {  
        navbar.classList.add("fixed");
    } else if (window.scrollY >= sticky) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true' || false;
            
            // Zatvori sve ostale menije ako otvaraš neki novi
            dropdownToggles.forEach(otherToggle => {
                if (otherToggle !== toggle) {
                    otherToggle.setAttribute('aria-expanded', 'false');
                    otherToggle.nextElementSibling.classList.remove('show');
                }
            });

            // Toggle current
            toggle.setAttribute('aria-expanded', !expanded);
            toggle.nextElementSibling.classList.toggle('show', !expanded);
        });
    });

    // Klik van menija zatvara sve
    document.addEventListener('click', (e) => {
        dropdownToggles.forEach(toggle => {
            const menu = toggle.nextElementSibling;
            if (!toggle.contains(e.target) && !menu.contains(e.target)) {
                toggle.setAttribute('aria-expanded', 'false');
                menu.classList.remove('show');
            }
        });
    });
});

// hamburger meni
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeMenu = document.querySelector('.close-menu');
const body = document.querySelector('body');

// Klik na hamburger otvara meni
hamburger.addEventListener('click', () => {
    navLinks.classList.add('active');
    closeMenu.classList.add('active');
    body.classList.add('no-scroll');
});

// Klik na iks zatvara meni
closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
    closeMenu.classList.remove('active');
    body.classList.remove('no-scroll');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        closeMenu.classList.remove('active');
        body.classList.remove('no-scroll');
    });
});

stickyNavbar();