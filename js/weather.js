const API_KEY="041e152c04a3302675ed4e9123100eef";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        console.log(data.name, data.weather[0].main);
    });
}

function onGeoError(){
    alert("Can't find your location.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
