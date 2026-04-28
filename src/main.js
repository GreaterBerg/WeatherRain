const apiKey = "f40569378f0426e07a2fee36dc158f8c";


// ГОРОД ИЗ ИНПУТА + ВЫЗОВ ФУНКЦИИ ВЫВОДА ПОГОДЫ

let cityInput = document.getElementById("searchInput");
let cityBtn = document.getElementById("searchBtn");
let cityTitle = document.getElementById("mainWeatherTitle");

cityBtn.addEventListener("click", () => {

    weather(link(cityInput.value))
    cityInput.value = ""

})

cityInput.addEventListener("keydown", (enter) => {

    if ( enter.key === "Enter" ) {
        weather(link(cityInput.value))
        cityInput.value = ""
    }

} )

function link(city) {
    const cityStr = city.replaceAll(" ", "")
    try { 
        return `https://api.openweathermap.org/data/2.5/weather?q=${cityStr}&appid=${apiKey}&units=metric`;
    } catch(error) {
        console.log(`errrrrrorrr ${error}`)
    }
}
console.log(cityTitle.innerText)

// СТЕЙТМЕНТ ЗАГРУЗКИ

// let tempTitle = document.getElementById("mainWeatherTemperature");
// let spec = document.querySelectorAll(".spec");

// const loadingStateOn = () => {
//     tempTitle.classList.add("loading");
//     tempTitle.innerText = "LOADING"

//     // spec.classList.add("loading");
//     // spec.innerText = "LOADING"
    
// }

// const loadingStateOff = () => {
//     tempTitle.classList.remove("loading");
//     tempTitle.innerHTML = `
//         <h2 id="mainWeatherTitle" class="mainWeatherTitle"></h2>
//         <p id="mainWeatherDate" class="mainWeatherDate"></p>
//         `
//     // spec.classList.delete("loading");
// }

// ВЫВОД ЗНАЧЕНИЙ ПОГОДЫ

let tempTitle = document.getElementById("mainWeatherTemperature");
let feelsLikeTitle = document.getElementById("feel");
let humidityTitle = document.getElementById("humidity");
let windTitle = document.getElementById("wind");
let precipitationTitle = document.getElementById("precipitation");

let loading = document.getElementById("loading");

async function weather(apiLink) {
    try {

        cityTitle.innerText = `Loading...`

        const response = await fetch(apiLink);
        if (!response.ok) {
            throw new Error(response.status);
        }

        const data = await response.json();
        console.log(data);
        
        cityTitle.innerText = ""

        outputTemp(data)

    } catch(error) {
        if ( error.message === "404" ) {
            cityTitle.innerText = "City not found"
        } else if ( error.message === "400" ) {
            cityTitle.innerText = "Enter your city"
        }
        console.log("new error =] ", error)
    }
}

const outputTemp = (data) => {
    cityTitle.innerHTML = `${data.name} ${data.sys.country}, <span>${data.weather[0].main}</span>`;

    tempTitle.innerText = Math.ceil(data.main.temp);

    feelsLikeTitle.innerText = Math.ceil(data.main.feels_like);

    humidityTitle.innerText = data.main.humidity;

    windTitle.innerText = Math.ceil(data.wind.speed);

    precipitationTitle.innerText = data.rain?.["1h"] || 0;
}

//  ВЫВОДЫ ДАТЫ

let mainDate = document.getElementById("mainWeatherDate");
let date = new Date()

mainDate.innerText = `${
    new Intl.DateTimeFormat("en-GB", {
        dateStyle: "full",
    }).format(date)
}`;
