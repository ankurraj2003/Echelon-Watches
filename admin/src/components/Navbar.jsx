import React from "react";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex w-[100%] items-center justify-between ml-2 py-2 font-medium ">
      <img src="/logo11.png" className="w-40" alt="main logo"></img>
      <button onClick={() => setToken("")}>LOGOUT</button>
    </div>
  );
};

export default Navbar;
