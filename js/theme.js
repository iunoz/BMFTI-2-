// Theme Toggle Functionality
(function() {
    // Terapkan theme segera tanpa menunggu DOMContentLoaded
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Set ke body juga jika sudah ada
    if (document.body) {
        document.body.setAttribute('data-theme', currentTheme);
    }
    
    // Function untuk update icon
    function updateThemeIcon(theme) {
        const themeToggle = document.getElementById('toggle-theme');
        if (themeToggle) {
            themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }
    
    // Setup event listener setelah DOM ready
    function setupThemeToggle() {
        const themeToggle = document.getElementById('toggle-theme');
        const body = document.body;
        
        if (!themeToggle) return;
        
        // Pastikan theme sudah diterapkan
        const savedTheme = localStorage.getItem('theme') || 'light';
        body.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
        
        themeToggle.addEventListener('click', function() {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
    
    // Jalankan setup ketika DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupThemeToggle);
    } else {
        setupThemeToggle();
    }
})();