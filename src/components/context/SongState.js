import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import songContext from './SongContext'
import userContext from './UserContext'
const SongState = ({children}) => {
    const {changeIsLogin, isLogin} = useContext(userContext)
    const host = "http://localhost:3000"
    const [songs, setSongs] = useState([{name:"love me like you do", coverImg:"img", dateOfRelease:"12-12-2000"}])
    const [artists, setArtists] = useState([{name:'aarif', dob:"1970-01-01T00:00:00.000Z", bio:"aarif is good boy"}])
    const [newArtistAndSong, setNewArtistAndSong] = useState({
      artistName:"", dob:"", bio:"", songName:"", releaseDate:"", coverImg:""
    })
    const [userRating, setUserRating] = useState("")

    const handleRateIt = async(songId)=>{
      const token = localStorage.getItem("authToken")
      if(!token) return console.log("token has expired")
      const config = {
        headers:{
          "Authorization":token
        }
      }
      await axios.post(`${host}/rate/song/${songId}`, {rating:parseInt(userRating)}, config)
      await getSongs()
      setUserRating("")
    }

    const getSongs = async()=>{
        // const resp = await fetch(`${host}/api/songs`)
        const songList = await axios.get(`${host}/api/songs`)
        // console.log(songList.data)
        setSongs(songList.data.songs)
    }

    const getArtists = async ()=>{
        // const resp = await fetch(`${host}/api/artists`)
        const artistList = await axios.get(`${host}/api/artists`)
        // const artistList = songList
        setArtists(artistList.data.artists)
    }

    const handleOnChange = (e)=>{
      setNewArtistAndSong(prev =>{
        return {...prev, [e.target.name]:e.target.value}
      })
    }
    
    const handleSubmit = async(e)=>{
      e.preventDefault()
      console.log(newArtistAndSong)
      const jsonData = {
        "songName":newArtistAndSong.songName,
        "dateOfRelease":new Date(newArtistAndSong.releaseDate),
        "coverImg":newArtistAndSong.coverImg, 
        "artistName":newArtistAndSong.artistName, 
        "dob":new Date(newArtistAndSong.dob), 
        "bio":newArtistAndSong.bio 
      }
      axios.post(`${host}/api/songs`, jsonData).then(()=>{
        console.log("done")
      }).catch(err=>{
        console.log(err.message)
      })
      
      
    }
    

    useEffect(()=>{
        async function fetchData(){
          await getSongs()
          await getArtists()
          if(localStorage.getItem("authToken")){
              changeIsLogin(true)
          }
        }
        fetchData()
        
    },[])
  return (
    <songContext.Provider value={{songs, artists, handleOnChange, handleSubmit, setUserRating, handleRateIt, userRating}}>
        {children}
    </songContext.Provider>
  )
}

export default SongState
