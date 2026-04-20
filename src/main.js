const apiKey = "f40569378f0426e07a2fee36dc158f8c";


// searchBtn.addEventListener("submit", () => {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${"Краснодар"}&appid=${apiKey}`) 
    .then((response) => {
        console.log("response:", response);

        return response.json()
    })
    .then((json) => {
        console.log(json);
        const { name, weather,  main } = json
        console.log(weather, main)
        cityTitle.innerText = name;
        tempTitle.innerText = Math.ceil(main.temp - 273.15);
    })


let cityTitle = document.getElementById("mainWeatherTitle");
let tempTitle = document.getElementById("mainWeatherTemperature");