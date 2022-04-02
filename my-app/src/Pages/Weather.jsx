import React, { useEffect, useState } from 'react';
import PostService from '../API/PostService';
import SearchCityInput from '../Components/UI/SearchCityInput/SearchCityInput';

function Weather() {
   const [weathers, setWeathers] = useState([]);
   console.log(weathers);

   useEffect(() => {
      loadWeather();
   }, [])

   const loadWeather = async () => {
      const response = await PostService.getWeatherCity();
      setWeathers(response.data);
   }

   return (
      <>
         <SearchCityInput />
         <div className='container__weather'>
            <div className='block__weather'>
               <div className='location'>
                  <h3>{weathers.name}</h3>
               </div>
               <div className='temp'>
                  <p>{Math.round(weathers.main.temp - 273)}&deg;</p>
               </div>
            </div>
         </div>
      </>
   )
}

export default Weather;