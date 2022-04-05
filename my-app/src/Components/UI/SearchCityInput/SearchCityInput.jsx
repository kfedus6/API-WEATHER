import React from 'react';
import cl from '../SearchCityInput/SearchCityInput.module.css';

function SearchCityInput({ setCity }) {
   let location;

   const sendLocation = () => {
      setCity(location);
   }

   return (
      <>
         <div className={cl.search__input} >
            <input type="text" placeholder='Город' value={location} onChange={(e) => location = e.target.value} />
            <button onClick={sendLocation}>Шукати</button>
         </div>
      </>
   )
}

export default SearchCityInput;