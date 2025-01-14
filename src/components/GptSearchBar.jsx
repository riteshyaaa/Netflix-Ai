import React from "react";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" px-2  w-1/2 grid grid-cols-12 bg-black shadow-2xl">
        <input
          className=" p-4 m-2 col-span-9"
          type="text"
          placeholder={lang.Hindi.gptPlaceholder}
        />
        <button
          className="py-2 px-4  m-3 col-span-3 bg-red-500 rounded  text-white"
          type="submit"
        >
        {lang.Hindi.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
