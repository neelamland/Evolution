// Slideshow Functionality
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentSlide = 0;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0'; // Set opacity for the current slide
    });
}

// Function to go to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the first slide
    showSlide(currentSlide);
}

// Change the slide every 3 seconds
setInterval(nextSlide, 3000);

// Initialize the slideshow
showSlide(currentSlide);

// Mouse Effects
document.addEventListener('mousemove', (e) => {
    createStar(e.pageX, e.pageY);
});

// Function to create a star element
function createStar(x, y) {
    const star = document.createElement('div');
    star.className = 'star'; // Make sure you have CSS for this class
    star.style.position = 'absolute';
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.width = '10px'; // Width for star size
    star.style.height = '10px'; // Height for star size
    star.style.backgroundColor = 'rgba(255, 255, 150, 0.8)'; // Soft yellow color
    star.style.borderRadius = '50%'; // Make it circular
    star.style.boxShadow = '0 0 10px rgba(255, 255, 150, 0.8), 0 0 20px rgba(255, 255, 150, 0.8)'; // Add glow effect
    star.style.transition = 'transform 0.5s, opacity 0.5s';
    star.style.opacity = '1';

    // Append the star to the body
    document.body.appendChild(star);

    // Animate the star
    setTimeout(() => {
        star.style.transform = 'scale(2)'; // Scale up
        star.style.opacity = '0'; // Fade out
    }, 50); // Small timeout for better animation effect

    // Remove after animation
    setTimeout(() => star.remove(), 1000);
}

// Select the biglogo element
const bigLogo = document.getElementById('biglogo');

// Add fade effect on hover
bigLogo.addEventListener('mouseover', () => {
    bigLogo.style.transition = 'opacity 0.5s ease';
    bigLogo.style.opacity = '0.1';
});

// Reset the opacity when mouse leaves
bigLogo.addEventListener('mouseout', () => {
    bigLogo.style.opacity = '1';
});
