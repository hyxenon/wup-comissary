import { createContext, useEffect, useState } from "react";


const LogInContext = createContext()

export function LogInProvider({children}){

    const [isLogIn, setIsLogIn] = useState(localStorage.getItem("login") || "false")

    const [userName, setUserName] = useState(localStorage.getItem("username") || "")

    useEffect(()=>{
        localStorage.setItem("login", isLogIn)
    },[isLogIn])

    useEffect(()=>{
        localStorage.setItem("username",userName)
    },[userName])


    const formSubmit = (e) => {
        e.preventDefault()
        setIsLogIn("true")

    }

    const handleChange = (e) => {
        const value = e.target.value
        setUserName(value)
    }

    const logOut = () => {
        setIsLogIn("false")
    }


    return(
        <LogInContext.Provider value={{isLogIn,userName,formSubmit,handleChange,logOut}}>
            {children}
        </LogInContext.Provider>
    )
}

export default LogInContext