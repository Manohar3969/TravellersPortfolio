// Get the Scroll-to-Top Button
const scrollToTopButton = document.getElementById('scrollToTop');

// Show or Hide the Button Based on Scroll Position
window.addEventListener('scroll', () => {
    // Check the scroll position (change "500" to match Section 2's position)
    if (window.scrollY > 500) {
        scrollToTopButton.classList.add('show'); // Show the button
    } else {
        scrollToTopButton.classList.remove('show'); // Hide the button
    }
});

// Scroll to Top on Button Click
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
});
