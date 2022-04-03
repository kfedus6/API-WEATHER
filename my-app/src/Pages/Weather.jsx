import React, { useEffect, useState } from 'react';
import PostService from '../API/PostService';
import SearchCityInput from '../Components/UI/SearchCityInput/SearchCityInput';
import WeatherList from '../Components/WeatherList';

function Weather() {
   const [weather, setWeather] = useState([]);
   const [city, setCity] = useState('');

   console.log(city);

   useEffect(() => {
      loadWeather();
   }, [])

   const loadWeather = async () => {
      const data = await PostService.getWeatherCity(city);
      setWeather([data]);
   }

   return (
      <>
         <SearchCityInput setCity={setCity} />
         <WeatherList weather={weather} />
      </>
   )
}

export default Weather;