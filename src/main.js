const apiKey = "f40569378f0426e07a2fee36dc158f8c";

// ПОГОДА ПО ШИРОТЕ И ДОЛГОТЕ

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${44.34}&lon=${10.99}&appid=${apiKey}`)
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

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${"London"}&appid=${apiKey}`) 