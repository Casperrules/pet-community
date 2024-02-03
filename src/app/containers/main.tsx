import React from "react";
import SearchBar from "../components/search-bar/search-bar";

const Main = () => {
  return (
    <div className="flex flex-col flex-1 w-full h-full items-center bg-red">
      <div className="banner relative flex w-full h-[220px] md:h-full  md:bg-red-50">
        <div className=" absolute w-full h-full top-0 z-0 md:flex bg-center bg-cover bg-no-repeat bg-[url(https://www.timeoutabudhabi.com/cloud/timeoutabudhabi/2021/09/11/Qeh4AqPp-shutterstock_286418909.jpg)]"></div>
        <div className="image-part hidden absolute w-full h-full top-0 z-0 bg-center bg-no-repeat bg-[url(https://media.istockphoto.com/id/1296353202/photo/group-of-pets-posing-around-a-border-collie-dog-cat-ferret-rabbit-bird-fish-rodent.jpg?s=612x612&w=0&k=20&c=l4UJze9hXcNABS_3QJcaOU07R1pcuV3L7w_IJTu9o2c=)] md:hidden"></div>
        <div className="text-part absolute md:top-0 z-20 md:z-0 md:w-full md:h-full bg-[#0a0a0a90] text-[#fff] flex flex-col justify-center items-center p-2 ">
          <div className="big-ass-text text-[3rem]  font-semibold">
            Welcome to Our Community !!
          </div>
          <div className="smaller-text text-lg">
            A place for you to talk about your journey and find answers to your
            questions ...
          </div>
        </div>
      </div>
      <div className="md:h-full w-full">
        <div className="search-bar w-full flex flex-col ">
          <div className="search-bar-title text-lg font-semibold text-left w-full md:p-2">
            Looking for something specific?
          </div>
          <SearchBar />
        </div>
      </div>
      <div className="some-product-stuff"></div>
    </div>
  );
};

export default Main;
