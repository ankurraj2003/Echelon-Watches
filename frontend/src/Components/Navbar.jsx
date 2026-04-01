import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };
  return (
    <div className="flex w-full items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src="/logo11.png" className="w-28 sm:w-40" alt="echelon" width="160" height="67"></img>
      </Link>
      <ul className="hidden sm:flex gap-5 text-m text-grey-700 ">
        <NavLink to="/" className="flex flex-col items-center-gap-1">
          <p>HOME</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-purple-700 hidden"></hr>
        </NavLink>
        <NavLink to="/Collection" className="flex flex-col items-center-gap-1">
          <p>COLLECTION</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-purple-700 hidden"></hr>
        </NavLink>{" "}
        <NavLink to="/About" className="flex flex-col items-center-gap-1">
          <p>ABOUT</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-purple-700 hidden"></hr>
        </NavLink>
        <NavLink to="/Services" className="flex flex-col items-center-gap-1">
          <p> SERVICES</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-purple-700 hidden"></hr>
        </NavLink>
      </ul>
      <div className="flex items-center gap-4 sm:gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src="/search.png"
          className="w-7 sm:w-9 cursor-pointer"
        ></img>
        <div className="group relative">
          <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
            <img
              onClick={() => (token ? null : navigate("/login"))}
              className="w-full h-full object-contain cursor-pointer"
              src="/profile.png"
            />
          </div>
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer text-gray-500 hover:text-black ">
                  My Profile
                </p>
                <Link to="/Orders">
                  <p
                    onClick={() => navigate("/orders")}
                    className="cursor-pointer text-gray-500  hover:text-black"
                  >
                    Orders
                  </p>
                </Link>
                <p
                  onClick={logout}
                  className="cursor-pointer text-gray-500  hover:text-black"
                >
                  Log Out
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="relative">
          <img src="/cart.png" className="w-6 sm:w-8 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-purple-500 text-white aspect-square rounded-full text-[10px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src="/menu.png"
          className="w-6 cursor-pointer sm:hidden"
        />
      </div>

      {/* Sidebar menu for small screens — fixed position to cover full viewport */}
      <div
        className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-[#111111] transition-all duration-300 z-[100] ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-6 " src="/back.svg"></img>
            <p>BACK</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 hover:bg-purple-200"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 hover:bg-purple-200"
            to="/Collection"
          >
            COLLECTION
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 hover:bg-purple-200"
            to="/About"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 hover:bg-purple-200"
            to="/Services"
          >
            SERVICES
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
