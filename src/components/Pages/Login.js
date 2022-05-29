import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import userContext from '../context/UserContext'

const Login = () => {
    const {setUserLoginDetails, onSubmitLogin} = useContext(userContext)
    const navigate = useNavigate()
   
  return (
    <>
        <h1>Login Here</h1>
        <form onSubmit={(e) => onSubmitLogin(e, navigate)}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" onChange={(e)=>setUserLoginDetails(prev=>(
                    {...prev, [e.target.name]:e.target.value}
                ))} name='email' id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={(e)=>setUserLoginDetails(prev=>(
                    {...prev, [e.target.name]:e.target.value}
                ))} name='password' id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </>
  )
}

export default Login
