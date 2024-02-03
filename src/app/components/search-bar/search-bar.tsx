"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  return (
    <div className="flex w-full flex-col justify-center items-center p-4 mt-2">
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
        <div className="location-selector mr-2 hidden md:flex">
          <select className="outline-none text-[#787878]" name="location">
            <option value="anywhere">Anywhere</option>
            <option value="my-location">My Location</option>
            <option value="whitefield">Whitefield</option>
            <option value="hsr">HSR Layout</option>
            <option value="jp-nagar">J.P. Nagar</option>
          </select>
        </div>
        <div className="category ml-2 hidden md:flex">
          <select
            name="category"
            id="category"
            className="outline-none text-[#787878]"
          >
            <option value="everything">Everything</option>
            <option value="food">Pet Food</option>
            <option value="appearal">Appearal</option>
            <option value="toys">Toys</option>
          </select>
        </div>
      </div>
      <div className="selectors flex justify-around w-full mt-2">
        <div className="location-selector mr-4 flex md:hidden border border-solid p-2 rounded-full">
          <select
            className="outline-none w-full text-[#787878] bg-[#fff]"
            name="location"
          >
            <option value="anywhere">Anywhere</option>
            <option value="my-location">My Location</option>
            <option value="whitefield">Whitefield</option>
            <option value="hsr">HSR Layout</option>
            <option value="jp-nagar">J.P. Nagar</option>
          </select>
        </div>
        <div className="category flex md:hidden border border-solid p-2 rounded-full">
          <select
            name="category"
            id="category"
            className="outline-none w-full text-[#787878] bg-[#fff]"
          >
            <option value="everything">Everything</option>
            <option value="food">Pet Food</option>
            <option value="appearal">Appearal</option>
            <option value="toys">Toys</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
