import React, { useContext } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import userContext from './context/UserContext'

const Navbar = () => {
  const {isLogin, handleLogout} = useContext(userContext)
  return (
    <header style={{marginBottom:"3rem"}}>
        <img style={{width: "100px"}} className="logo" src="pngegg.png" alt="img" />
        <nav>
            <a href="/" className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <ul className="navRoutes">
                <li><Link to='/'><button className="active">Home</button></Link></li>
                <li><Link to='/songs'><button>Add Song</button></Link></li>
                {isLogin ? <li onClick={handleLogout}><button style={{color:"red"}}>Logout</button></li> : <><li><Link to='/login'><button>Login</button></Link></li>
                <li><Link to='/signup'><button>Sign up</button></Link></li></>}
            </ul>
        </nav>
        <input type="text" name="search" id="search" placeholder="Search..."/>
    </header>
  )
}

export default Navbar
