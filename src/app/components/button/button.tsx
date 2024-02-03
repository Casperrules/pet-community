import React from "react";

type Prop = {
  title: string;
  onClickHandler: () => void;
  variant: string;
};

const Button = ({ title, onClickHandler, variant }: Prop) => {
  const Color: any = {
    primary: " text-[#fff]  bg-[#4848ee] hover:bg-[#3f3fec]",
  };
  return (
    <div
      className={
        "p-2 flex flex-1 justify-center items-center m-4 rounded-lg  hover:shadow-sm cursor-pointer font-semibold" +
        Color[variant]
      }
    >
      {title}
    </div>
  );
};

export default Button;
