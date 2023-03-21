import React, { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import getFormattedWeatherData from './services/weatherService';
import WeatherContainer from './components/WeatherContainer/WeatherContainer';
import Forecast from './components/Forecast/Forecast';


function App() {
  const [cityName, setCityName] = useState();
  const [weather, setWeather] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchParams = { q: cityName, units: "metric" };
    const data = await getFormattedWeatherData(searchParams);
    console.log(data);
    setWeather(data);
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className='text-orange-700 uppercase font-bold text-4xl antialiased tracking-tight font-serif text-shadow9'>Weather App</h1>
      <Form cityName={cityName} setCityName={setCityName} handleSubmit={handleSubmit} />
      {weather &&
        (<>
          <WeatherContainer weatherData={weather} />
          <Forecast title={"Hourly Forecast"} forecast={weather.hourly}/>
          <Forecast title={"Daily Forecast"} forecast={weather.daily} />
        </>
        )
      }

    </div>
  );
}

export default App;

