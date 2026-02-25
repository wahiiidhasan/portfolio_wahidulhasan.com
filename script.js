// ===== THEME TOGGLE =====
(function() {
    var html = document.documentElement;
    var stored = localStorage.getItem('theme');
    if (stored) {
    html.classList.toggle('dark', stored === 'dark');
    }

    function toggle() {
    var isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    document.getElementById('themeToggleDesktop').addEventListener('click', toggle);
    document.getElementById('themeToggleMobile').addEventListener('click', toggle);
})();

// ===== MOBILE MENU =====
(function() {
    var btn = document.getElementById('hamburgerBtn');
    var menu = document.getElementById('mobileMenu');
    var links = menu.querySelectorAll('a');

    btn.addEventListener('click', function() {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
    });

    links.forEach(function(link) {
    link.addEventListener('click', function() {
        btn.classList.remove('open');
        menu.classList.remove('open');
    });
    });
})();