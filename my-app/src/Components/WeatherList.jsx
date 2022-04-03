import React from 'react';

function WeatherList({ weather }) {
   return (
      <>
         {
            weather.map((w, idx) => {
               return (
                  <div key={idx} className='container__weather' >
                     <div className='block__weather'>
                        <div className='city'>
                           <h3>{w.name}</h3>
                        </div>
                        <div className='temp'>
                           <span>Max: {Math.round(w.main.temp_max - 273)}&deg;</span>
                           <span>Temp: {Math.round(w.main.temp - 273)}&deg;</span>
                           <span>Min: {Math.round(w.main.temp_min - 273)}&deg;</span>
                        </div>
                        <div className='weather'>
                           <span>{w.weather[0].main}</span>
                        </div>
                        <div className='wind'>
                           <span>Wind speed: {w.wind.speed}</span>
                        </div>
                     </div>
                  </div >
               )
            })
         }
      </>
   )
}

export default WeatherList;