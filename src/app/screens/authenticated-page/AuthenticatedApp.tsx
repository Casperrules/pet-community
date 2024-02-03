import Header from "@/app/components/Header/Header";
import Main from "@/app/containers/main";
import React from "react";

const AuthenticatedApp = () => {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <div className="main-window h-[calc(100%-1px)] overflow-auto  mt-[60px] md:mt-[80px]">
        <Main />
      </div>
    </div>
  );
};

export default AuthenticatedApp;
