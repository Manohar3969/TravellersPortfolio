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

const modeToggle = document.getElementById("mode-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
        modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

modeToggle.addEventListener("click", () => {
    const theme = document.documentElement.getAttribute("data-theme");
    
    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem("theme", "dark");
    }
});