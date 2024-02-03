import Button from "@/app/components/button/button";
import Input from "@/app/components/inputs/input";
import React from "react";

const Login = () => {
  return (
    <div className="flex ">
      <form
        className="flex flex-col flex-1 bg-[#fff] rounded-lg min-w-[400px] "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="title p-4 w-full text-center text-2xl font-semibold border-b border-b-[#f7f7f7] mb-2">
          LogIn
        </div>
        <Input
          onChangeHandler={(val): void => {
            console.log("email: ", val);
          }}
          placeholder="Username"
          type="text"
        />
        <Input
          onChangeHandler={(val): void => {
            console.log("email: ", val);
          }}
          placeholder="Passcode"
          type="password"
        />
        <Button
          title="LogIN"
          onClickHandler={() => {
            console.log("submit here");
          }}
          variant="primary"
        />
      </form>
    </div>
  );
};

export default Login;
