import axios from 'axios'
import React, { useState } from 'react'
import userContext from './UserContext'


const UserState = ({children}) => {

    const host = "http://localhost:3000"
    const [userDetails, setUserDetails] = useState({name:"", email:"", password:""})
    const [userLoginDetails, setUserLoginDetails] = useState({email:"", password:""})
    const [isLogin, changeIsLogin] = useState(false)

    const onUserSubmit = async (e, navigate)=>{
        e.preventDefault()
        await axios.post(`${host}/user/signup`, userDetails)
        navigate("/login")
    }

    const onSubmitLogin = async(e ,navigate)=>{
        e.preventDefault()
        const resp = await axios.post(`${host}/user/signin`, userLoginDetails)
        console.log(resp.data.token)
        localStorage.setItem("authToken", resp.data.token)
        navigate("/")
        let loggedin = true
        changeIsLogin(loggedin)
    }
    const toggleLogin = ()=>{
        isLogin ? changeIsLogin(false) : changeIsLogin(true)
    }
    const handleLogout = ()=>{
        localStorage.removeItem("authToken")
        let loggedin = false
        changeIsLogin(loggedin)
    }

  return (
    <userContext.Provider value={{
        setUserDetails,
        userDetails,
        onUserSubmit,
        setUserLoginDetails,
        onSubmitLogin,
        isLogin,
        toggleLogin,
        handleLogout,
        changeIsLogin
    }}>
        {children}
    </userContext.Provider>
  )
}

export default UserState
