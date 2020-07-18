
var moon = document.getElementById("moon");
var sun = document.getElementById("sun");
var body = document.querySelector("body");

const currentTheme = localStorage.getItem('theme') || null;


sun.addEventListener('click', themesun, false);
moon.addEventListener('click', thememoon, false);

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    

    if (currentTheme === 'moon') {
        moon.checked = true;
        moon.style.display = 'none';
        sun.style.display = 'block';
    } else {
        moon.style.display = 'block';
        sun.style.display = 'none';
    }
}

function thememoon (e) {
    document.documentElement.setAttribute('data-theme', 'moon');
    moon.style.display = 'none';
    sun.style.display = 'block';
    localStorage.setItem('theme', 'moon');
}

function themesun (e) {
    document.documentElement.setAttribute('data-theme', 'sun');
    moon.style.display = 'block';
    sun.style.display = 'none';
    localStorage.setItem('theme', 'sun');
}

