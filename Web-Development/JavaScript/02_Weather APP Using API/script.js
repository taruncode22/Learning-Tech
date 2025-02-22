document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-messag");
    const API_KEY = "3d62ac23bee1fca59cda1261e6438b4f";

    getWeatherBtn.addEventListener('click', async() => {
        const city = cityInput.value.trim() 
        if (!city) return ;
    } )

    try { 
        const weatherData = await fecthWeatherData(city);
        DisplyWeatherData(weatherData);
        
    } catch (error) {
       ShowERROR();
    }

    async function fecthWeatherData(city) {

    }

    function DisplyWeatherData(weatherData) {

    }

    function ShowERROR() {
        weatherInfo.classList.add('hidden');
        errorMessage.className.remove('hidden');
    }

    

)