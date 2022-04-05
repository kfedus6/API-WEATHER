import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import RequireAuth from './hoc/RequireAuth';
import Information from './Pages/Information';
import Reviews from './Pages/Reviews';
import Weather from './Pages/Weather';
import Login from './Pages/Login';
import AuthProvider from './hoc/AuthProvider';

import './App.css';

function App() {
   return (
      <AuthProvider>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route index element={<Information />} />
               <Route path='weather' element={
                  <RequireAuth>
                     <Weather />
                  </RequireAuth>
               } />
               <Route path='reviews' element={<Reviews />} />
               <Route path='login' element={<Login />} />
            </Route >
         </Routes>
      </AuthProvider>
   )
}

export default App;