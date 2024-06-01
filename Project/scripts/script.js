
const today = new Date();
const currentYear = document.querySelector("#currentyear");
currentYear.innerHTML = today.getFullYear();
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

function setVisitCount() {
    if(localStorage.getItem('visits')) {
        let priorVisits = parseInt(localStorage.getItem('visits'));
        let visits = priorVisits + 1;
        localStorage.setItem('visits', visits);
    } else {
        
        localStorage.setItem('visits', 1);
    }
    
    // Get the number of visits from localStorage and display it
    let count = localStorage.getItem('visits');
    document.querySelector('#visits').textContent = `Site Visits: ${count}`;
}

setVisitCount();

