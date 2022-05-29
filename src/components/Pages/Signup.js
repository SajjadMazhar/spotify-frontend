import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import userContext from '../context/UserContext'

const Signup = () => {
    const {setUserDetails, onUserSubmit} = useContext(userContext)
    const navigate = useNavigate()
  return (
      <>
        <h1>Register Here</h1>
        <form onSubmit={(e)=>onUserSubmit(e, navigate)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" onChange={(e)=>setUserDetails(prev => ({...prev, [e.target.name]:e.target.value}))} id="name" name='name' aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" onChange={(e)=>setUserDetails(prev => ({...prev, [e.target.name]:e.target.value}))} name='email' id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={(e)=>setUserDetails(prev => ({...prev, [e.target.name]:e.target.value}))} name='password' id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Signup</button>
        </form>
      </>
  )
}

export default Signup
