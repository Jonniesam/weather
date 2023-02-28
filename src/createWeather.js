import { forecastDay, forecastDayNum } from "./date"

export function createCurrentDay(weatherData){
    const weatherIcon = document.getElementById('weatherIcon')
    const currentWeather = document.getElementById('currentWeather');
    const des = document.getElementById('description');
    const currentDay = document.getElementById('currentDay')
    const high = document.getElementById('high')
    const lugar = document.getElementById('location') 
    const feel = document.getElementById('feelsLike')
    const humidity = document.getElementById('humidity')
    const windSpeed = document.getElementById('windSpeed')
  
    
    const icon = weatherData.weather[0].icon;
    const L = `L:${Math.floor(weatherData.main.temp_min)}\u00B0`
    const H = `H:${Math.floor(weatherData.main.temp_max)}\u00B0`
    const cday = weatherData.dt;
    
    lugar.innerHTML = weatherData.name
    currentDay.innerHTML = `${forecastDay(cday)} ${forecastDayNum(cday)}`   
    currentWeather.innerHTML =`${Math.floor(weatherData.main.temp)}\u00B0`
    des.innerHTML = weatherData.weather[0].description
    high.innerHTML =` ${H} / ${L}`;
    weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@4x.png`;
    feel.innerHTML = `Feels Like: ${Math.floor(weatherData.main.feels_like)}\u00B0`;
    humidity.innerHTML = `Humidity: ${Math.floor(weatherData.main.humidity)}\u0025`;
    windSpeed.innerHTML = `Wind Speed: ${Math.floor(weatherData.wind.speed)}mph`

  }

export function createForecastDays(weatherData){
    const forecastDays = document.querySelectorAll('[data-forecast-day]')
    forecastDays.forEach((day) => {
      for ( let i = 1; i <= forecastDays.length; i++){
        const day = document.getElementById(`${i}`)
    const afternoon = document.getElementById(`${i}Afternoon`)
    const numIcon = document.getElementById(`${i}Icon`)
    const description = document.getElementById(`${i}Description`)
    const morning = document.getElementById(`${i}Morning`)
        
        
        const cday =  weatherData.list[i].dt
    const icon = weatherData.list[i].weather[0].icon
    
    day.innerHTML = `${forecastDay(cday)} ${forecastDayNum(cday)}` 
    afternoon.innerHTML = `${Math.floor(weatherData.list[i].temp.day)}\u00B0`
    numIcon.src = `http://openweathermap.org/img/wn/${icon}.png`
    description.innerHTML = weatherData.list[i].weather[0].description
    const H =`${Math.floor(weatherData.list[i].temp.max)}\u00B0`
    const L = `${Math.floor(weatherData.list[i].temp.min)}\u00B0`
    morning.innerHTML = `H:${H} / L:${L}`
      }
    })
  }

 