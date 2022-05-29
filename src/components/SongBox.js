import React, { useContext } from 'react'
import songContext from './context/SongContext'
import SongItem from './SongItem'

const SongBox = () => {
    const {songs} = useContext(songContext)
  return (
    <>
    <div className='container' style={{display:"flex", justifyContent:"center", marginTop:"2rem"}}><h1> ---Top 10 Songs--- </h1></div>
        <table className="table" style={{marginTop:"3rem"}}>
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Cover</th>
            <th scope="col">Song</th>
            <th scope="col">Released on</th>
            <th scope="col">Average Rating</th>
            </tr>
        </thead>
        <tbody>
            {songs.map((song, index)=>(
                <tr key={song.id+"a"} style={{verticalAlign:"baseline"}}><SongItem song={song} index={index}/></tr>
            ))}
        </tbody>
        </table>
    </>
  )
}

export default SongBox
