// Calculate and display windchill when the page loads
document.addEventListener("DOMContentLoaded", function() {
    // Static values for temperature and wind speed (°C and km/h)
    var temperature = 10;
    var windSpeed = 5;
    
    var windChill = calculateWindChill(temperature, windSpeed);
    var weatherBox = document.querySelector('.weather');
    weatherBox.innerHTML += "<p>Windchill: " + windChill + "°C</p>";
  
    // Add current year and last modification date to footer
    var footer = document.getElementById('footer');
    var currentYear = new Date().getFullYear();
    var lastModified = document.lastModified;
    footer.innerHTML = "©" + currentYear + " ♦ Paulo André Nascimento ♦ Last Modified: " + lastModified;
  });
  
  // Function to calculate windchill
  function calculateWindChill(temperature, windSpeed) {
  
    if (temperature <= 10 && windSpeed > 4.8) {
      // Formula to calculate windchill (in °C)
      return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    } else {
      return "N/A"; 
    }
  }

  