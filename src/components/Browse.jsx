import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // Using the custom hook to fetch the now playing movies.
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />{" "}
        </>
      )}
      {/* 
      - MainContainer
         - videoBackground
         - videoTitle
       - SecondaryContainer
         - movieslist * n 
         - movieCard * n
           
      */}
    </div>
  );
};

export default Browse;
