import React from "react";
import Footer from "./Footer";

const Common = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center font-poppins py-5 lg:py-16 bg-gradient-to-br from-gray-400 to-gray-700 bg-clip-text text-transparent ">
        <span className="text-3xl lg:text-7xl   font-extrabold tracking-widest uppercase">
          stay connected
        </span>
        <span className="text-3xl lg:text-7xl  font-extrabold  tracking-widest uppercase">
          stay updated
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default Common;
