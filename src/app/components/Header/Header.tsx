"use client";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Input from "../inputs/input";

const Header = () => {
  const [input, setInput] = useState("");
  return (
    <div className="fixed h-[60px] md:h-[80px] top-0 z-50 flex w-full bg-[#4d4dcf] p-4 text-[#fff]">
      <div className="small-appbar flex w-full justify-between">
        <div
          className="menu-button visible cursor-pointer lg:hidden"
          onClick={() => {
            console.log("open the menu");
          }}
        >
          <IoMdMenu size={25} />
        </div>
        <div className="app-name self-center font-bold cursor-pointer">
          Woof&Trill
        </div>
        <div className="search-bar self-center w-[600px] items-center rounded-full bg-[#fff]  hidden lg:flex">
          <div
            className={
              "py-2 pl-2 flex items-center justify-center text-[#8b8b8b]"
            }
          >
            <FaSearch />
          </div>
          <Input
            placeholder="Search"
            onChangeHandler={(val) => setInput(val)}
            type="text"
            variant="search"
          />
        </div>
        <div className="user-icon flex items-center">
          <div className="menu-items hidden mr-4 lg:flex">
            <div className="menu-items cursor-pointer p-1 mx-2 hover:font-semibold">
              Community
            </div>
            <div className="menu-items cursor-pointer p-1 mx-2 hover:font-semibold">
              About
            </div>
            <div className="menu-items cursor-pointer p-1 mx-2 hover:font-semibold">
              Contact Us
            </div>
          </div>
          <FaUser size={25} />
        </div>
      </div>
    </div>
  );
};

export default Header;
