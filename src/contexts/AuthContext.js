import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../firebase' 


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const unsubscribe = useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
    return () => {unsubscribe()}
  }, []);


  return(
    <AuthContext.Provider value={{ currentUser }}>
      { children }
    </AuthContext.Provider>
  )
}

export function UserAuth() {
  return useContext(AuthContext)
}