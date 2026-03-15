document.addEventListener('DOMContentLoaded', () => {
    // Current Year for Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        // Animate hamburger lines
        hamburger.classList.toggle('toggle');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    // Scroll Animations using Intersection Observer
    const animatedElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // WhatsApp Form Logic
    const sendWhatsAppBtn = document.getElementById('sendWhatsApp');
    if (sendWhatsAppBtn) {
        sendWhatsAppBtn.addEventListener('click', () => {
            const name = document.getElementById('waName').value.trim();
            const message = document.getElementById('waMessage').value.trim();
            
            if (!name || !message) {
                alert('Por favor, indica tu nombre y cómo podemos ayudarte.');
                return;
            }
            
            // Format message for WhatsApp
            const wpPhone = "34661856218"; // Business Phone Number
            const wpMessage = `¡Hola Espejito Espejito! Soy *${name}*.\n\n${message}`;
            const encodedMessage = encodeURIComponent(wpMessage);
            
            // Redirect to WhatsApp
            const wpUrl = `https://wa.me/${wpPhone}?text=${encodedMessage}`;
            window.open(wpUrl, '_blank');
        });
    }
});
