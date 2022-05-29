import React, { useContext } from 'react'
import songContext from './context/SongContext'

const SongItem = ({song, index}) => {
    const {handleRateIt, setUserRating} = useContext(songContext)
  return (
    <>
        <th scope="row">{index+1}</th>
        <td><img style={{width:"10rem", borderRadius:"10px"}} alt="coverImage" src={`${song.coverImg}`}/></td>
        <td>{song.name}</td>
        <td>{new Date(song.dateOfRelease).toDateString()}</td>
        <td><div>
        <span>Current Rating: </span><span style={{fontWeight:'bold'}}>{song.avgRating}</span><div
          style={{display:"flex"}}
        ><input style={{width:"10rem", paddingLeft:"5px", borderRadius:"50px", outline:"none", border:"none",borderBottom:"1px solid black"}} placeholder='Enter your rating' type='number' max={5} onChange={(e)=>setUserRating(e.target.value)} /><button
         style={{marginLeft:"1rem"}}
         onClick={()=> handleRateIt(song.id)}
         >Rate it</button></div>
          </div></td>
    </>
  )
}

export default SongItem
