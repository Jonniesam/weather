import { createCurrentDay, createForecastDays } from "./createWeather"
import './style.css';


const locat = document.getElementById('search')
const submit = document.getElementById('submit')
const cel = document.getElementById('celsius')
const fahr = document.getElementById('fahrenheit')

const place = []

function locs(ev) {
  ev.preventDefault()
  let cityname;
  if (locat.value){
    place.push(locat.value)
    
    
  } else {
    place.push('Long Beach')
  }
  cityname = place.at(-1)
  getWeather(cityname, 'imperial')
  fahr.classList.add('active')
}
  
  

async function getWeather(loc, units) {
    const currentResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=b38535da4099c5606c4a4454851f50ff&units=${units}`);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${loc}&APPID=b38535da4099c5606c4a4454851f50ff&units=${units}`);
    const currentWeatherData = await currentResponse.json();
    const weatherData = await response.json();
    createCurrentDay(currentWeatherData)
    createForecastDays(weatherData)
}
  
  
  
function cels (ev) {
    ev.preventDefault()
    fahr.classList.remove('active')
    getWeather(place.at(-1), 'metric')
    cel.classList.add('active')
}

function fah (ev) {
    ev.preventDefault()
    cel.classList.remove('active')
    getWeather(place.at(-1), 'imperial')
    fahr.classList.add('active')
}


    

window.addEventListener('load', locs)
submit.addEventListener('click', locs)
cel.addEventListener('click', cels)
fahr.addEventListener('click', fah)