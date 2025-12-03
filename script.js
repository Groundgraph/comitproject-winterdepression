// Get the toggle checkbox element
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Add event listener for the toggle switch
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        // Switch to light theme
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        // Switch to dark theme
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }
});

// Optional: Save theme preference to localStorage
themeToggle.addEventListener('change', function() {
    const theme = this.checked ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
});

// Load saved theme preference on page load
window.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        themeToggle.checked = true;
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        themeToggle.checked = false;
        body.classList.add('dark-theme');
    }
});
