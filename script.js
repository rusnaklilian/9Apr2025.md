// Functia care face conversia din celsius în fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Functia care ia valoarea introdusa si arata rezultatul
function converteste() {
    // Luam valoarea din caseta de input
    let celsius = document.getElementById("celsius").value;
    // Calculam Fahrenheit
    let fahrenheit = celsiusToFahrenheit(celsius);
    // Afisam rezultatul
    document.getElementById("rezultat").innerHTML = celsius + "°C = " + fahrenheit + "°F";
}