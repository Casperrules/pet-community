"use client";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Input from "../inputs/input";

const Header = () => {
  const [input, setInput] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="fixed h-[60px] md:h-[80px] top-0 z-50 flex w-full bg-[#4d4dcf] p-4 text-[#fff]">
      <div className="small-appbar flex w-full justify-between">
        <div
          className="menu-button visible cursor-pointer lg:hidden"
          onClick={() => {
            setOpenMenu(true);
          }}
        >
          {<IoMdMenu size={25} />}
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
      {openMenu && (
        <div className="menu-sidebar absolute top-0 left-0 w-[250px] p-2 bg-[#fff] h-screen border-r-2 shadow-lg">
          <div className="menu-header flex p-2 text-[#000] justify-end border-b ">
            <div
              className="cursor-pointer"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <IoMdClose size={25} />
            </div>
          </div>
          <div className="menu-options flex flex-col">
            <div className="menu-items m-2 p-1 text-[#000] border border-solid hover:bg-[#4d4dcf94] hover:text-[#fff] hover:shadow-md cursor-pointer rounded-full">
              Community
            </div>
            <div className="menu-items m-2 p-1 text-[#000] border border-solid hover:bg-[#4d4dcf94] hover:text-[#fff] hover:shadow-md cursor-pointer rounded-full">
              About
            </div>
            <div className="menu-items m-2 p-1 text-[#000] border border-solid hover:bg-[#4d4dcf94] hover:text-[#fff] hover:shadow-md cursor-pointer rounded-full">
              Contact Us
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
