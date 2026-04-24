const apiKey = "f40569378f0426e07a2fee36dc158f8c";

let cityTitle = document.getElementById("mainWeatherTitle").innerText;
console.log(cityTitle)

let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityTitle}&appid=${apiKey}`;

// searchBtn.addEventListener("submit", () => {
// fetch() 
//     .then((response) => {
//         console.log("response:", response);

//         return response.json()
//     })
//     .then((json) => {
//         console.log(json);
//         const { name, weather,  main } = json
//         console.log(weather, main)
//         cityTitle.innerText = name;
//         tempTitle.innerText = Math.ceil(main.temp - 273.15);
//     })

let mainDate = document.getElementById("mainWeatherDate");
let date = new Date()

mainDate.innerText = `${
    new Intl.DateTimeFormat("en-GB", {
        dateStyle: "full",
    }).format(date)
}`;

// ВЫВОД ЗНАЧЕНИЙ 


let tempTitle = document.getElementById("mainWeatherTemperature");
let feelsLikeTitle = document.getElementById("feel");
let humidityTitle = document.getElementById("humidity");
let windTitle = document.getElementById("wind");
let precipitationTitle = document.getElementById("precipitation");


async function weather() {
    try {
        const response = await fetch(apiLink);
        if (!response.ok) {
            throw new Error("new error =] ", response.status);
        }

        const data = await response.json();
        console.log(data);

        // MAIN TEMP
        tempTitle.innerText = Math.ceil(data.main.temp - 273.15);

        // FEELS LIKE 
        feelsLikeTitle.innerText = Math.ceil(data.main.feels_like - 273.15);

        // HUMIDITY
        humidityTitle.innerText = data.main.humidity;

        // WIND
        windTitle.innerText = Math.ceil(data.wind.speed);

        // PRECIPITATION
        precipitationTitle.innerText = data.rain["1h"]


    } catch(error) {
        console.log("new error =] ", error)
    }
}

weather()
