import React, { useState, useEffect } from "react";
import { Router, Routes, Route } from "react-router-dom";
import Loader from "./Pages/Loader";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Collection from "./Pages/Collection";
import Services from "./Pages/Services";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import PlaceOrder from "./Pages/PlaceOrder";
import Orders from "./Pages/Orders";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Searchbar from "./Components/SearchBar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative">
          {/* Navbar overlays the hero — positioned absolute with z-index */}
          <div className="absolute top-0 left-0 w-full z-50 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            <Navbar />
          </div>

          {/* Main content */}
          <div className="pt-[80px] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            <Searchbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Collection" element={<Collection />} />
              <Route path="/About" element={<About />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Product/:ProductId" element={<Product />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/place-order" element={<PlaceOrder />} />
              <Route path="/Orders" element={<Orders />} />
            </Routes>

            <Footer />
          </div>
          <Analytics />
          <SpeedInsights />
        </div>
      )}
    </>
  );
};
export default App;
