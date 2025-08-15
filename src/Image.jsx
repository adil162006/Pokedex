import React from 'react'

const Image = ({ imageUrl, name, id, types }) => {
  return (
    <div className="show">
        <div className="showImage">
            <img src={imageUrl}  className="pokemonImage"
            alt="pokemon" />
        </div>
        <div className="showName">   
            <p><b>{name}</b></p>
            <p>Pokemon id: #{id}</p>
            <p>Type: {types}</p>
        </div>


    </div>
  )
}

export default Image