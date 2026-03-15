import React from "react";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-400">
      <div>
        <img src="/authentic.png" className="w-20 m-auto mb-5" alt="" loading="lazy" width="80" height="80" />
        <p className="font-semibold text-gray-400">100% Authentic Articles</p>
      </div>
      <div>
        <img src="/bestprice.webp" className="w-16 m-auto mt-3" alt="" loading="lazy" width="64" height="64" />
        <p className="font-semibold mt-5 text-gray-400">Best Market Price</p>
      </div>
      <div>
        <img src="/payment.png" className="w-24 m-auto" alt="" loading="lazy" width="96" height="96" />
        <p className="font-semibold mt-3 text-gray-400">
          Flexible Payment Option
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
