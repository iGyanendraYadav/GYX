import React from "react";
import { myPictures } from "./data/mydata";

const Gallery = () => {
  return (
    <div className="container flex flex-col justify-center items-center space-y-3 font-poppins">
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="text-5xl font-extrabold text-gray-700 uppercase tracking-widest">
          Wonderful
        </h1>
        <h2 className="text-4xl font-extrabold text-gray-700 uppercase tracking-widest">
          Pictures
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8 xl:grid-cols-2 xl:gap-10">
        {myPictures.map((ek) => {
          return (
            <img
              className="aspect-square w-96 h-96 xl:h-[28rem] xl:w-[28rem] rounded object-cover"
              key={ek.title}
              src={ek.pic}
              alt={ek.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
