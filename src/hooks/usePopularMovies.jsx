import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addpopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constent";

const usePopularMovies = () => {
    const dispatch = useDispatch()
  const getPopularmovies = async() =>{
    // API call to fetch now playing movies
   const data = await fetch("https://api.themoviedb.org/3/movie/popular?&page=1", API_OPTIONS);
    const json =  await data.json()
  console.log(json.results) 
    dispatch(addpopularMovies(json.results))
  }
  useEffect(() => {
    getPopularmovies();
  }, []);
 
}
export default usePopularMovies;