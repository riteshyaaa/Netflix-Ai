import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey =  useSelector((store) => store.config.language)
  const searchText = useRef(null);
  // console.log(langKey)
  const handleGptSearch =  () => {
   console.log(searchText.current.value)
  }
  return (
    <div className="pt-[8%] m-2 flex justify-center">
      <form className=" px-2  w-1/2 grid grid-cols-12 bg-black " onSubmit = {(e) => e.preventDefault()}>
        <input
        ref =  {searchText}
          className=" p-2 m-2 col-span-9"
          type="text"
          placeholder={lang[langKey].gptPlaceholder}
        />
        <button
          className="py-2 px-4  m-3 col-span-3 bg-red-500 rounded  text-white"
          
          onClick={handleGptSearch}
        >
        {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
