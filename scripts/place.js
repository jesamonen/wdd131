// Dynamic Footer Initialization
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Configuration Block: Static values matching our HTML display exactly
const currentTempC = 9;   // Must be <= 10 °C to calculate
const currentWindKmh = 15; // Must be > 4.8 km/h to calculate

/**
 * Calculates the environmental wind chill index factor for Metric Units.
 * Constraint: Accomplished strictly in exactly ONE line of code.
 */
const calculateWindChill = (temp, speed) => 
  (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(1);

/**
 * Validates assignment constraints and outputs results to the DOM
 */
function updateWeatherDisplay() {
  const outputElement = document.getElementById("windchill");

  // Check if conditions for Metric Wind Chill calculation are met
  if (currentTempC <= 10 && currentWindKmh > 4.8) {
    const computedFactor = calculateWindChill(currentTempC, currentWindKmh);
    outputElement.textContent = `${computedFactor} °C`;
  } else {
    outputElement.textContent = "N/A";
  }
}

// Fire the update function when page elements finish evaluating
updateWeatherDisplay();