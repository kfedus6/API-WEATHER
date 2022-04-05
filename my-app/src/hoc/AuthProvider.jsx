import React, { createContext, useState } from 'react'

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

   const [user, setUser] = useState('')

   const signin = (name, cbTo) => {
      setUser(name)
      cbTo()
   }

   return <AuthContext.Provider value={{ user, signin }}>
      {children}
   </AuthContext.Provider>
}

export default AuthProvider