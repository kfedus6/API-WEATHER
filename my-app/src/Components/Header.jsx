import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/weather.png';

function Header() {
   return (
      <div className='header'>
         <div className='header__logo'>
            <img src={logo} alt="logo" />
         </div>
         <div className='header__menu'>
            <NavLink to='/'>Інформація</NavLink>
            <NavLink to='/weatherCity'>Погода</NavLink>
            <NavLink to='/reviews'>Отзывы</NavLink>
         </div >
      </div>
   )
}

export default Header;