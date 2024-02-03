import React from "react";

import Input from "@/app/components/inputs/input";
import Button from "@/app/components/button/button";

const Register = () => {
  return (
    <div className="flex rounded-md ">
      <form
        className="flex flex-col flex-1 bg-[#fff] rounded-md min-w-[400px] "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="title p-4 w-full text-center text-2xl font-semibold border-b border-b-[#f7f7f7] mb-2">
          Register
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
          placeholder="Email"
          type="email"
        />
        <Input
          onChangeHandler={(val): void => {
            console.log("email: ", val);
          }}
          placeholder="Passcode"
          type="password"
        />
        <Button
          title="Register"
          onClickHandler={() => {
            console.log("submit here");
          }}
          variant="primary"
        />
      </form>
    </div>
  );
};

export default Register;
