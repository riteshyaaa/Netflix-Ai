import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_URL } from '../utils/constent';

const GptSearchPage = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img
          src= { BG_URL}
          alt="BG_Img"
        />
      </div>
      <GptSearchBar/> 
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearchPage;