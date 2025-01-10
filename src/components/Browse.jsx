import React from "react";
import Header from "./Header";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constent";
const Browse = () => {


  const getNowplayingmovies = async() =>{
    // API call to fetch now playing movies
   const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
    const json =  await data.json()
   console.log(json)

  }
  useEffect(() => {
    getNowplayingmovies();
  }, []);
 
  return <div>
    <Header/>

  </div>;
};

export default Browse;
