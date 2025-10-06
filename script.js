// Function to toggle the mobile navigation menu
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

// Optional: Smooth scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close the mobile menu after clicking a link
        const navbar = document.getElementById('navbar');
        if (navbar.classList.contains('active')) {
             navbar.classList.remove('active');
        }
    });
});