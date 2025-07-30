document.addEventListener('DOMContentLoaded', function() {
    // Setup typing animation
    setupTypingAnimation();
    
    // Setup scroll animations
    setupScrollAnimations();
});

function setupTypingAnimation() {
    const typingText = document.getElementById('typing-text');
    if (!typingText) return;
    
    const texts = [
        "One Team",
        "One Dream", 
        "Membangun Negeri"
    ];
    
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let isPausing = false;
    
    const typingSpeed = 100;
    const deleteSpeed = 50;  
    const pauseTime = 2000;  
    
    function typeWriter() {
        if (isPausing) {
            setTimeout(() => {
                isPausing = false;
                isDeleting = true;
                typeWriter();
            }, pauseTime);
            return;
        }
        
        const currentText = texts[currentTextIndex];
        
        if (!isDeleting && currentCharIndex < currentText.length) {
            // Typing forward
            typingText.textContent = currentText.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else if (!isDeleting && currentCharIndex === currentText.length) {
            // Pause setelah selesai mengetik
            isPausing = true;
            typeWriter();
        } else if (isDeleting && currentCharIndex > 0) {
            // Deleting backward
            typingText.textContent = currentText.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(typeWriter, deleteSpeed);
        } else if (isDeleting && currentCharIndex === 0) {
            // Move to next text
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            setTimeout(typeWriter, typingSpeed);
        }
    }
    setTimeout(typeWriter, 1000);
}

// Setup scroll animations
function setupScrollAnimations() {
    const titleBox = document.getElementById('title-box');
    const whatSection = document.getElementById('what-we-have');
    
    // Intersection Observer untuk animasi scroll
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'what-we-have') {
                    const titleBox = document.getElementById('title-box');
                    if (titleBox && !titleBox.classList.contains('animate-in')) {
                        setTimeout(() => {
                            titleBox.classList.add('animate-in');
                        }, 200);
                    }
                } else if (entry.target.id === 'title-box') {
                    entry.target.classList.add('animate-in');
                }
            }
        });
    }, observerOptions);
    
    // Observe both section and title box
    if (whatSection) {
        observer.observe(whatSection);
    }
    if (titleBox) {
        observer.observe(titleBox);
    }
    
    // Fallback untuk browser yang tidak support Intersection Observer
    if (!('IntersectionObserver' in window)) {
        let animationTriggered = false;
        
        function checkScroll() {
            if (animationTriggered) return;
            
            const titleBox = document.getElementById('title-box');
            const whatSection = document.getElementById('what-we-have');
            
            if (titleBox && whatSection) {
                const sectionRect = whatSection.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                if (sectionRect.top < windowHeight * 0.8 && sectionRect.bottom > 0) {
                    titleBox.classList.add('animate-in');
                    animationTriggered = true;
                    window.removeEventListener('scroll', checkScroll);
                }
            }
        }
        
        window.addEventListener('scroll', checkScroll);
        checkScroll();
    }
}