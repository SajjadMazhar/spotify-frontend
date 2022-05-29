import './App.css';
import Navbar from './components/Navbar';
import SongState from './components/context/SongState';
import AddSongs from './components/AddSongs';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';
import UserState from './components/context/UserState';
function App() {
  
  return (
    <UserState>
      <SongState>
        <BrowserRouter>
            <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/songs' element={<AddSongs/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </SongState>
    </UserState>
    
  );
}

export default App;
