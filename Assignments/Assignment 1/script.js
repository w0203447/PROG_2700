// Using a Dom element listener so that the program only runs when the go button is clicked, and works for specific buttons.
document.addEventListener("DOMContentLoaded", function() {
// Temperature Question
// Temperature conversion button
    document.getElementById("go_btn_temp").addEventListener("click", function(){
   
// Get temperature value and type from user input
        var temperature = document.getElementById("temperature").value;
        var temperatureType = document.getElementById("temperatureType").value;
  
// Check if temperature type is celsius
    if(temperatureType.toUpperCase().trim() == "CELSIUS" || temperatureType.toUpperCase().trim() == "C") {
        var result1 = ((temperature *9/5) + 32)
        alert("The temperature in Fahrenheit is: " + result1 + "° F") 
        } 
// Check if temperature type is fahrenheit
    else if(temperatureType.toUpperCase().trim() == "FAHRENHEIT" || temperatureType.toUpperCase().trim() == "F") {
        var result2 = ((temperature - 32) * 5/9)
        alert("The temperature in Celsius is: " + result2 + "° C");
    } 
// If temperature type is invalid
    else {
        alert("Invalid temperature type. Please enter either 'Celcius' or 'Fahrenheit'");
    }
});

// Bonus Point Distance Question
// Distance conversion button
    document.getElementById("go_btn_dist").addEventListener("click", function(){
// Get distance value and type from user input
        var distance = document.getElementById("distance").value;
        var distanceType = document.getElementById("distanceType").value;

// Check if distance type is kilometers or a variant of Kilometers.
    if(distanceType.toUpperCase().trim() == "KILOMETERS" || distanceType.toUpperCase().trim() == "KMS" || 
       distanceType.toUpperCase().trim() == "KM" || distanceType.toUpperCase().trim() == "K") {
        var result3 = (distance * 0.621371)
        alert("The distance in miles is: " + result3 + " miles");
    } 
// Check if distance type is miles, or a variant of miles.
    else if(distanceType.toUpperCase().trim() == "MILES" || distanceType.toUpperCase().trim() == "MIL" || 
            distanceType.toUpperCase().trim() == "MI" || distanceType.toUpperCase().trim() == "M" ||
            distanceType.toUpperCase().trim() == "MS" || distanceType.toUpperCase().trim() == "MIS"){
                var result4 = (distance / 0.621371)
                alert("The distance in kilometers is: " + result4 + " km");
    } 
// If distance type is invalid
    else {
        alert("Invalid distance type. Please enter either 'Kilometers' or 'Miles'");
    }
});
});





  


