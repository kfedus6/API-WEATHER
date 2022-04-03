import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Information from './Pages/Information';
import Reviews from './Pages/Reviews';
import Weather from './Pages/Weather';

function App() {
   return (
      <Routes>
         <Route path='/' element={<Layout />}>
            <Route index element={<Information />} />
            <Route path='weather' element={<Weather />} />
            <Route path='reviews' element={<Reviews />} />
         </Route >
      </Routes>
   )
}

export default App;