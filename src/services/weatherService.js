import axios from 'axios';
import { formatToLocalTime } from './formatToLocalTime';


const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "3f40c2955752bab42ef9f84088cae0af";


const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    return axios.get(url).then(res => res.data)
}
const formatCurrentWeather = (data) => {
    let {
        coord: { lat, lon },
        weather,
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset }, 
        wind: { speed },
        timezone
    } = data;

    dt = formatToLocalTime(dt,timezone);
    sunrise = formatToLocalTime(sunrise,timezone,'hh:mm a')
    sunset = formatToLocalTime(sunset,timezone, 'hh:mm a');

    const { main, icon, description } = weather[0];

    return { lat, lon, temp, feels_like, temp_max, temp_min, humidity, name, dt, country, sunrise, sunset, speed, main, icon, description }
}
const formatForecastWeather = (data) => {
    let {timezone,daily,hourly} = data;

    daily = daily.map(day => {
        return{
            title:formatToLocalTime(day.dt, timezone, 'ccc'),
            temp:day.temp.day,
            icon:day.weather[0].icon
        }
    });

    hourly = hourly.map(hour => {
        return{
            title:formatToLocalTime(hour.dt, timezone, 'hh:mm a'),
            temp:hour.temp.day,
            icon:hour.weather[0].icon
        }
    });

    return{timezone,hourly,daily};
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather);

    const {lat, lon} = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData('onecall',{lat,lon, exclude:'current,minutely,alerts',units:searchParams.units}).then(formatForecastWeather)

    return {...formattedCurrentWeather,...formattedForecastWeather};
}



export default getFormattedWeatherData;