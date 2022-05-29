import React from 'react'

const ArtistItem = ({artist, index}) => {

  return (
    <>
        <th scope="row">{index+1}</th>
        <td>{artist.name}</td>
        <td>{new Date(artist.dob).toDateString()}</td>
        <td>{artist.bio}</td>
    </>
  )
}

export default ArtistItem
