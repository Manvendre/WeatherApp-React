import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon from "../Assets/search.png"
import clear_icon from "../Assets/clear.png"
import cloud_icon from "../Assets/cloud.png"
import drizzle_icon from "../Assets/drizzle.png"
import rain_icon from "../Assets/rain.png"
import humidity_icon from "../Assets/humidity.png"
import snow_icon from "../Assets/snow.png"
import wind_icon from "../Assets/wind.png"

const WeatherApp=() =>{

    const [city, setcity] = useState("Search_Please");
    const [temp, settemp] = useState(0);
    const [humidity, sethumidity] = useState(0);
    const [winds, setwinds] = useState(0);
    const [wicon, setwicon] = useState(cloud_icon);

    let api_key="0b0537c978ad44574471bea02b87f694"
    const search=async() =>{
        const element=document.getElementsByClassName("cityInput")
        
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

        let response = await fetch(url);
        let data= await response.json();
        setcity(data.name);
        settemp(data.main.temp);
        sethumidity(data.main.humidity);
        setwinds(data.wind.speed)

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n" ){
            setwicon(clear_icon)
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n" ){
            setwicon(cloud_icon)
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n" ){
            setwicon(drizzle_icon)
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n" ){
            setwicon(drizzle_icon)
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n" ){
            setwicon(rain_icon)
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n" ){
            setwicon(rain_icon)
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n" ){
            setwicon(snow_icon)
        }
        

    }

    return (
        <div className='container'>
             <div className='top-bar'>
                <input type="text" className='cityInput' placeholder='Search'/>
                <div className='search-icon' onClick={()=>{search()}}>
                    <img src={search_icon} alt="" />
                </div>
             </div>
             <div className="Weather-image">
                <img src={wicon} alt="" />
             </div>
             <div className="weather-temp">{temp}°c</div>
             <div className="weather-location">{city}</div>
             <div className="data-container">
                 <div className="eliment">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">{humidity}%</div>
                        <div className="text">Humidity</div>
                    </div>
                 </div>
                 <div className="eliment">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">{winds}km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                 </div>
             </div>

        </div>
      );
}

export default WeatherApp
