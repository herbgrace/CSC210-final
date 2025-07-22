// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {

    // Get the theme toggle butotn
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check if user has a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = 'Light Mode';
    }

    // Add click event to theme toggle button
    themeToggle.addEventListener('click', function() {
        // Toggle the dark theme class
        body.classList.toggle('dark-theme');

        // Check if dark theme is now active
        const isDark = body.classList.contains('dark-theme');

        // Update button text
        themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';

        // Save theme preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});