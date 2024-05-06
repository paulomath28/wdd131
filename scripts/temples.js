document.addEventListener('DOMContentLoaded', function() {
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var menuWrapper = document.querySelector('.menu-wrapper');

    hamburgerMenu.addEventListener('click', function() {
        menuWrapper.classList.toggle('menu-open');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var currentYearElement = document.getElementById('currentyear');
    var lastModifiedElement = document.getElementById('lastModified');
    var currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
    var lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = "Last modified: " + lastModifiedDate;
});


