"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  return (
    <div className="flex w-full justify-center items-center p-4 mt-2">
      <div className="search-bar-inputs w-full flex items-center border border-[#aaaaaa] border-solid p-2 rounded-xl">
        <div className="search-button text-[#7a7a7a]">
          <FaSearch />
        </div>
        <div className="input-section flex ml-2 w-full">
          <input
            type="text"
            placeholder="What are you looking for ?"
            className="w-full flex p-2 outline-none border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
