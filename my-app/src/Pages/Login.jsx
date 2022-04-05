import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Registration from '../Components/UI/Registration/Registration';
import { useAuth } from '../hook/useAuth';

const Login = () => {
   const [name, setName] = useState('')
   const location = useLocation()
   const { signin } = useAuth()
   const navigate = useNavigate()

   const authorization = () => {
      signin(name, () => {
         navigate(location.state.from, { replace: true })
      })
   }

   return (
      <Registration setName={setName} authorization={authorization} />
   )
}

export default Login;