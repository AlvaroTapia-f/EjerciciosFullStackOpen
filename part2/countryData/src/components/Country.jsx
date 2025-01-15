import { useEffect, useState } from "react";
import weather from "../services/weather";

const Country = ({country}) =>{
//    console.log(country);
//    console.log(country.languages);

const [weatherData, setWeatherData] = useState({
    main: {
        temp: 0
    },
    weather: [
        {
            icon: ""
        }
    ],
    wind: {
        speed: 0
    }
});

useEffect(()=>{
    weather.getWeather(country.capital).then(response => {
        console.log(response);
        setWeatherData(response);
    })
},[]);


    return(
        <div>
            <h2>{country.name.official}</h2>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <h3>Languages</h3>
            <ul>
                {Object.entries(country.languages).map(([key, value]) => 
                    <li key={key}>{value}</li>
                )}
            </ul>
            <img src={country.flags.svg} alt="Flag" style={{maxBlockSize: 140}} />
            <h2>Weather in {country.capital}</h2>
            <p>Temperature: {weatherData.main.temp} Celsius</p>
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weatherIcon" />
            <p>Wind: {weatherData.wind.speed} m/s</p>
        </div>
    )
}
export default Country;