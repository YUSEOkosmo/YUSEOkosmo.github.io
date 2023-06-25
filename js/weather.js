
const weatherAPIKey = "594d5c8ee6115fbdc73f3fd5f70b898c";


function onGeoSuccess(locate){
    const lat = locate.coords.latitude;
    const lng = locate.coords.longitude;
    
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${weatherAPIKey}&units=metric`
    fetch(weatherURL)
        .then(response => response.json())
        .then(data => {
        const locateSpan = document.querySelector("#weather span:first-child");
        const weatherSpan = document.querySelector("#weather span:nth-child(2)");
        const temperatureSpan = document.querySelector("#weather span:last-child");
        locateSpan.innerText = `yourLocate : ${data.name}`;
        weatherSpan.innerText = `current Weather : ${data.weather[0].main}`;
        temperatureSpan.innerText = `${data.main.temp}℃`;
    });
}
function onGeoFail(err){
    alert(err + "Failed to get locate");
}



navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoFail);
