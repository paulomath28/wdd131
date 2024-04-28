document.addEventListener('DOMContentLoaded', function() {
    
    var currentYearElement = document.getElementById('currentyear');

    
    var lastModifiedElement = document.getElementById('lastModified');

    
    var currentYear = new Date().getFullYear();

    
    currentYearElement.textContent = currentYear;

    
    var lastModifiedDate = document.lastModified;

    
    lastModifiedElement.textContent = "Last modified: " + lastModifiedDate;
});
