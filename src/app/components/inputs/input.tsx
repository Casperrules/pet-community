"use client";
import React from "react";

type Props = {
  onChangeHandler: (value: string) => void;
  placeholder: string;
  type: string;
  variant?: string;
};

const Input = ({ onChangeHandler, placeholder, type, variant }: Props) => {
  const VarinatStyles: any = {
    search: " rounded-lg",
  };
  return (
    <div className="flex flex-1 m-2 ">
      <input
        className={
          "flex flex-1 p-2 focus:outline-none text-[#666]" +
          (variant ? VarinatStyles[variant] : " border-b border-b-[#7b7b7b]")
        }
        placeholder={placeholder}
        type={type}
        onChange={(event) => onChangeHandler(event.target.value)}
      />
    </div>
  );
};

export default Input;
