const apiKey = "f40569378f0426e07a2fee36dc158f8c";

// ПОГОДА ПО ШИРОТЕ И ДОЛГОТЕ

let latValue = 44.34;
let lonValue = 10.99;

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latValue}&lon=${lonValue}&appid=${apiKey}`)
    .then((response) => {
        console.log("response:", response);

        return response.json()
    })
    .then((json) => {
        console.log(json);
        const weather = json
        console.log(weather)
    })


// ГЕОКОДЕР ГОРОДОВ 

let searchInputValue = document.getElementById("searchInput").value;
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("submit", () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&appid=${apiKey}`) 
        .then((response) => {
            console.log("response:", response);

            return response.json()
        })
        .then((json) => {
            console.log(json);
            const { lat, lon } = json
            latValue, lonValue = lat, lon
            console.log(lat, lon)
        })
})