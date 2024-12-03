import React from 'react'
import { useState } from 'react'
import './Weather.css'
import rain from '../photos/heavy-rain.png'
import snowy from '../photos/snowy.png'
import storm from '../photos/storm.png'
import sunny from '../photos/sunny.png'
import sun from '../photos/sun.png'
import windy1 from '../photos/windy1.png'
import cloudy from '../photos/cloudy.png'
import brokencloudy from '../photos/brokencloudy.png'
import s from '../photos/search.png'
import humidity from '../photos/humidity.png'
import wind_speed from '../photos/speed.png'
const Weather = () => 
{
  let api_key="875648215ed8a50add886633eb76d564";
  const [wicon,change_icon ]= useState(sunny);
  const search= async ()=>
  {
    const element=document.getElementsByClassName("city_input")
    if(element[0].value==="")
    {
       return 0;
    }

    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    
    let response=await fetch(url);
    let data=await response.json();

    const humidity=document.getElementsByClassName("humidity-present");
    const wind=document.getElementsByClassName("wind-rate");
    const temperature=document.getElementsByClassName("weather_temp");
    const location=document.getElementsByClassName("weather_location");
    
    humidity[0].innerHTML=Math.floor(data.main.humidity)+"%";
    wind[0].innerHTML=Math.floor(data.wind.speed)+"Km/h";
    temperature[0].innerHTML=Math.floor(data.main.temp)+"'C ";
    location[0].innerHTML=data.name;
     
   if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
   {
      change_icon(sun)
   } 
   else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
   {
      change_icon(sun)
   }
   else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
   {
      change_icon(cloudy)
   }
   else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
   {
      change_icon(brokencloudy)
   }
   else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
   {
      change_icon(rain)
   }
   else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
   {
      change_icon(rain)
   }
   else if(data.weather[0].icon==="11d" || data.weather[0].icon==="11n")
   {
      change_icon(storm)
   }
   else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
   {
      change_icon(snowy)
   }
   else 
   {
      change_icon(windy1)
   }

   }
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="city_input" placeholder='Search' onClick={()=>{search()}} />
            <div className="white">
                <img src={s} alt="" height="50px" width="50px" />
            </div>
        </div>
        <div className="weather_image">
            <img src={wicon} alt="" height="400px" width="400px"/>
        </div>
        <div className="weather_temp">24'C</div>
        <div className="weather_location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity} alt="" height="80px" width="80px" />
                <div className="data">
                    <div className="humidity-present">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_speed} alt="" height="80px" width="80px" />
                <div className="data">
                    <div className="wind-rate">18km/h</div>
                    <div className="text">wind speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather