document.addEventListener('DOMContentLoaded', function() {
    // Setup infinite carousel untuk team cards (about page)
    setupInfiniteCarousel('.team-card');
    
    // Setup infinite carousel untuk member cards (departemen pages)
    setupInfiniteCarousel('.member-card');
    
    // Team card click handlers untuk Instagram
    setupCardHandlers('.team-card', handleTeamCardClick);
    
    // Member card click handlers untuk Instagram
    setupCardHandlers('.member-card', handleMemberCardClick);
    
    // Carousel hover controls
    setupCarouselControls();
});

function setupInfiniteCarousel(cardSelector) {
    const carouselTrack = document.querySelector('.carousel-track');
    if (!carouselTrack) return;
    
    const originalCards = Array.from(carouselTrack.querySelectorAll(cardSelector));
    if (originalCards.length === 0) return;
    
    // Clone cards multiple times untuk smooth infinite scroll
    const cloneCount = 3; // Clone 3 times untuk seamless loop
    
    for (let i = 0; i < cloneCount; i++) {
        originalCards.forEach(card => {
            const clone = card.cloneNode(true);
            carouselTrack.appendChild(clone);
        });
    }
    
    // Setup event listeners untuk semua cards (original + clones)
    setupCardHandlers(cardSelector, cardSelector.includes('team') ? handleTeamCardClick : handleMemberCardClick);
}

function setupCardHandlers(cardSelector, clickHandler) {
    const cards = document.querySelectorAll(cardSelector);
    cards.forEach(card => {
        // Remove existing listeners to prevent duplicates
        card.removeEventListener('click', clickHandler);
        card.addEventListener('click', clickHandler);
    });
}

function handleTeamCardClick(event) {
    const instagramUrl = this.getAttribute('data-instagram');
    if (instagramUrl) {
        window.open(instagramUrl, '_blank');
    }
}

function handleMemberCardClick(event) {
    const instagramUrl = this.getAttribute('data-instagram');
    if (instagramUrl) {
        window.open(instagramUrl, '_blank');
    }
}

function setupCarouselControls() {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselTrack = document.querySelector('.carousel-track');
    
    if (!carouselContainer || !carouselTrack) return;
    
    // Pause animation on hover
    carouselContainer.addEventListener('mouseenter', function() {
        carouselTrack.style.animationPlayState = 'paused';
    });

    carouselContainer.addEventListener('mouseleave', function() {
        carouselTrack.style.animationPlayState = 'running';
    });
    
    // Touch support untuk mobile
    let startX = 0;
    let isDragging = false;
    
    carouselContainer.addEventListener('touchstart', function(e) {
        startX = e.touches[0].pageX;
        isDragging = true;
        carouselTrack.style.animationPlayState = 'paused';
    }, { passive: true });

    carouselContainer.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        e.preventDefault();
    }, { passive: false });

    carouselContainer.addEventListener('touchend', function() {
        isDragging = false;
        carouselTrack.style.animationPlayState = 'running';
    }, { passive: true });
    
    // Ensure animation continues after window focus
    window.addEventListener('focus', function() {
        if (carouselTrack) {
            carouselTrack.style.animationPlayState = 'running';
        }
    });
}

// Reset animation if needed
function resetCarouselAnimation() {
    const carouselTrack = document.querySelector('.carousel-track');
    if (carouselTrack) {
        carouselTrack.style.animation = 'none';
        carouselTrack.offsetHeight; // Trigger reflow
        carouselTrack.style.animation = 'scroll-left 25s linear infinite';
    }
}

// Add intersection observer to pause when not visible
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            const carouselTrack = entry.target.querySelector('.carousel-track');
            if (carouselTrack) {
                if (entry.isIntersecting) {
                    carouselTrack.style.animationPlayState = 'running';
                } else {
                    carouselTrack.style.animationPlayState = 'paused';
                }
            }
        });
    }, { threshold: 0.1 });
    
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        observer.observe(carouselContainer);
    }
}