import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitile from './VideoTitile'
const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  
  if(!movies) return;
const mainMovies = movies[0]
console.log(mainMovies)
const {original_title, overview, id} = mainMovies
  return (
    <div>
        <VideoTitile  title = {original_title} overview= {overview}/>
      <VideoBackground movieId = {id}/>
    
    </div>
  )
}

export default MainContainer