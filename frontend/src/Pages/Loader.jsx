import React from "react";

const Loader = () => {
  return (
    <div className="card">
      <div className="loader" aria-live="polite">
        <p>loading</p>
        <div className="words">
          <span className="word">forms</span>
          <span className="word">info</span>
          <span className="word">watches</span>
          <span className="word">prices</span>
          <span className="word">luxury</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
