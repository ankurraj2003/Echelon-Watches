import React, { useState } from "react";
import { motion } from "framer-motion";
import Title from "./Title";

const VipCustomers = [
  { name: "Shah Rukh Khan", image: "public/shahrukkhan.jpg" },
  { name: "Andrew Tate", image: "public/andrewtate.webp" },
  { name: "Ranbir Kapoor", image: "public/ranbir.jpg" },
  { name: "Virat Kohli", image: "public/viratkohli.webp" },
  { name: "Tristan Tate", image: "public/tristan.webp" },
  { name: "Hardik Pandya", image: "public/hardik.webp" },
];

const VipCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="my-10">
      <div className="text-center py-4 text-3xl">
        <Title text1={"VIP"} text2={"CUSTOMERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-400 pb-10">
          Join the ranks of exclusive individuals who trust our brand. Our VIP
          customers are a testament to the quality and luxury we offer in every
          timepiece.
        </p>
      </div>
      <motion.div
        className="flex space-x-8 p-4"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      >
        {VipCustomers.concat(VipCustomers).map((customer, index) => (
          <div
            key={index}
            className="w-80 h-64 relative flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden shadow-lg border-b-slate-600"
          >
            <img
              src={customer.image}
              alt={customer.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-50 w-full p-4">
              <p className="text-white text-lg font-bold">{customer.name}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default VipCards;
