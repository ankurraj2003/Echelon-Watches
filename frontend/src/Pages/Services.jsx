import React from "react";
import Title from "../Components/Title";

const Services = () => {
  return (
    <div className="text-2xl text-center pt-8 border-t">
      <Title text1="OUR" text2="SERVICES" />
      <div className="flex flex-col sm:flex-row mt-8">
        <div className="relative group w-full sm:w-1/3 aspect-square cursor-pointer">
          <img
            className="object-cover w-full h-full transition duration-300 ease-in-out group-hover:opacity-40"
            src="/repair.jpg"
            alt="Repair"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-white font-bold text-xl">Repair</span>
          </div>
        </div>

        <div className="relative group w-full sm:w-1/3 aspect-square sm:ml-4 mt-4 sm:mt-0  cursor-pointer">
          <img
            className="object-cover w-full h-full transition duration-300 ease-in-out group-hover:opacity-40"
            src="/sell.webp"
            alt="Sell"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-white font-bold text-xl">Sell</span>
          </div>
        </div>

        <div className="relative group w-full sm:w-1/3 aspect-square sm:ml-4 mt-4 sm:mt-0  cursor-pointer">
          <img
            className="object-cover w-full h-full transition duration-300 ease-in-out group-hover:opacity-40"
            src="/engrave.webp"
            alt="Engrave"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-white font-bold text-xl">Engrave</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
