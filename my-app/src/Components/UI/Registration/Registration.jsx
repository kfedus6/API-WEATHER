import React from 'react';
import cl from '../Registration/Registration.module.css';

function Registration({ setName, authorization }) {

   return (
      <div className={cl.reg}>
         <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Login' />
         <button onClick={authorization}>login</button>
      </div>
   )
}

export default Registration;