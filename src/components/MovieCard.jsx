import React from 'react'
import { IMG_CDN_URL } from '../utils/constent'
const MovieCard = ({poster}) => {
    // console.log(poster)
  return (
    <div className="w-40 p-2">
        <img alt='Movie Card' src =  {IMG_CDN_URL + poster} /> 
        
      
    </div>
  )
}

export default MovieCard