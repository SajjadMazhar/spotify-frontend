import React, { useContext } from 'react'
import songContext from './context/SongContext'
const AddSongs = () => {
    const {handleOnChange, handleSubmit} = useContext(songContext)
  return (
    <>
    <div className='container' style={{display:"flex", justifyContent:"center", marginTop:"4rem"}}><h1>Add Your Song From Here</h1></div>
    
    <form style={{margin:"3rem 10rem"}} onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="songName" className="form-label">Song Name</label>
    <input type="text" className="form-control" placeholder='Song...' onChange={handleOnChange} name='songName' id="songName" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="cover" className="form-label">Cover</label>
    <input type="text" className="form-control" placeholder='Enter cover image url' id="cover" onChange={handleOnChange} name="coverImg"/>
  </div>
  <div className="mb-3">
    <label htmlFor="released" className="form-label">Release Date</label>
    <input type="date" className="form-control" name='releaseDate' onChange={handleOnChange} id="released"/>
  </div>
  <div className="mb-3">
    <label htmlFor="artist" className="form-label">Artist Name</label>
    <input type="text" className="form-control" placeholder='Artist...' name='artistName' onChange={handleOnChange} id="artist"/>
  </div>
  <div className="mb-3">
    <label htmlFor="dob" className="form-label">Date of Birth</label>
    <input type="date" className="form-control" name='dob' id="dob" onChange={handleOnChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="bio" className="form-label">BIO</label>
    <textarea type="text" className="form-control" placeholder='Enter bio...' name='bio' id="bio" onChange={handleOnChange}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</>
  )
}

export default AddSongs
