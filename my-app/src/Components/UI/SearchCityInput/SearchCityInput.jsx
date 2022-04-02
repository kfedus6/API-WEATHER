import React from 'react';
import cl from '../SearchCityInput/SearchCityInput.module.css';

function SearchCityInput() {

   return (
      <>
         <div className={cl.search__input}>
            <input type="text" placeholder='Город' />
            <button >Шукати</button>
         </div>
      </>
   )
}

export default SearchCityInput;