import React from "react";
import SideBar from "../Home/SideBar/SideBar";
import Header from "./Header"

const Search = () => {
  return (
    <>
      <SideBar />
     
      <div className="w-3/4 fixed top-2 right-2 h-[85vh] rounded-lg shadow-lg bg-gray-800">
        <Header />
        
      </div>
    </>
  );
};

export default Search;
