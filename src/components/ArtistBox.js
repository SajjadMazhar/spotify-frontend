import React, { useContext } from 'react'
import songContext from './context/SongContext'
import ArtistItem from './ArtistItem'

const ArtistBox = () => {
    const {artists} = useContext(songContext)
  return (
    <>
    <div className='container' style={{display:"flex", justifyContent:"center", marginTop:"4rem"}}><h1> ---Top 10 Artists--- </h1></div>
    <table className="table" style={{marginBottom:"10rem", marginTop:"3rem"}}>
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Artist</th>
            <th scope="col">DOB</th>
            <th scope="col">BIO</th>
            </tr>
        </thead>
        <tbody>
            {artists.map((artist, index)=>(
                <tr key={artist.id+"b"}><ArtistItem artist={artist} index={index}/></tr>
            ))}
        </tbody>
        </table>
    </>
  )
}

export default ArtistBox
