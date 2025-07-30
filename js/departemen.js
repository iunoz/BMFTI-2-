document.addEventListener('DOMContentLoaded', function() {
    // Setup simple one-time typing animation untuk hero title
    setupSimpleTypingAnimation();
});

function setupSimpleTypingAnimation() {
    const heroTitle = document.querySelector('.hero-content h1');
    if (!heroTitle) return;
    
    const originalText = heroTitle.textContent;
    const typingSpeed = 100; // milliseconds per character
    
    let currentIndex = 0;
    
    // Clear initial text
    heroTitle.textContent = '';
    
    function typeWriter() {
        if (currentIndex < originalText.length) {
            heroTitle.textContent = originalText.substring(0, currentIndex + 1);
            currentIndex++;
            setTimeout(typeWriter, typingSpeed);
        }
    }
    setTimeout(typeWriter, 500); // Initial delay 500ms
}

// Utility function to restart typing animation jika diperlukan
function restartTypingAnimation() {
    setupSimpleTypingAnimation();
}

// Export functions untuk penggunaan external jika diperlukan
window.typingAnimation = {
    setupSimple: setupSimpleTypingAnimation,
    restart: restartTypingAnimation
};