import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  // console.log(movies[0].poster_path);

  if (!movies) return null;
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white ">{title}</h1>
      <div className=" flex overflow-x-scroll ">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} poster={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
