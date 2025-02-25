import axios from 'axios'

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = import.meta.env.VITE_API_KEY

const getWeather = (city) => {
    const request = axios.get(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`);
    return request.then(response => response.data);
}

export default { getWeather }