import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Searchbar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("Collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);
  return showSearch && visible ? (
    <div className="bg-gray text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 ">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#141414] flex-1 outline-none text-sm text-white placeholder-gray-500 "
          type="text"
          placeholder="Search Model"
        ></input>
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-6 cursor-pointer"
        src="cross.png"
      />
    </div>
  ) : null;
};

export default Searchbar;
