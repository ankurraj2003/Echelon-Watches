import React from "react";

const Newsletter = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center pt-12">
      <p className="text 2-xl font-medium text-yellow-600">
        Stay Timeless with Our Exclusive Newsletter
      </p>
      <p className="text-gray-300 mt-3">
        Discover the latest in horological craftsmanship, exclusive collections,
        and insider insights. Be the first to know about new arrivals, bespoke
        designs, and VIP events.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-12   pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-dotted p-2 text-black"
          type="email"
          placeholder="Enter your Email ID"
        ></input>
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
