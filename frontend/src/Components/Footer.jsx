import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" bg-[#222222] w-100 shadow-lg flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14  text-sm p-5 mt-40 border 1px border-red-600">
        <div>
          <img src="/logo11.png" className="mb-5 w-32"></img>
          <p className="w-full md:w-2/3  text-gray-200">
            At Echelon, we redefine luxury through time. Our collection is a
            symbol of refined taste and enduring quality, created for those who
            appreciate the finer details in life. Every watch inEchelon is more
            than just a timepiece; it is a statement of excellence, engineered
            to stand the test of time.
            <br /> Discover Echelon – where luxury knows no limits.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>PrivacyPolicy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 9991234567</li>
            <li>contact@echelonwatches.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ Echelonwatches.com- All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
