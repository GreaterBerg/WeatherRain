const apiKey = "f40569378f0426e07a2fee36dc158f8c";




let cityInput = document.getElementById("searchInput");
let cityBtn = document.getElementById("searchBtn");

let cityTitle = document.getElementById("mainWeatherTitle");

cityBtn.addEventListener("click", () => {
    cityTitle.innerText = cityInput.value
    
    weather(link(cityTitle.innerText))

})

console.log(cityTitle)

function link(city) {
    try { 
        return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    } catch(error) {
        console.log(`errrrrrorrr ${error}`)
    }
}



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

// let toCelsius = (k) => { Math.ceil(k - 273.15) };

async function weather(apiLink) {
    try {
        const response = await fetch(apiLink);
        if (!response.ok) {
            throw new Error(`new error =]  :  ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        // MAIN TEMP
        tempTitle.innerText = Math.ceil(data.main.temp);

        // FEELS LIKE 
        feelsLikeTitle.innerText = Math.ceil(data.main.feels_like);

        // HUMIDITY
        humidityTitle.innerText = data.main.humidity;

        // WIND
        windTitle.innerText = Math.ceil(data.wind.speed);

        // PRECIPITATION
        precipitationTitle.innerText = data.rain?.["1h"] || 0;


    } catch(error) {
        console.log("new error =] ", error)
    }
}
