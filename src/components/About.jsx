import React from "react";
import InstaPost1 from "../components/images/InstaPost1.jpg";

const About = () => {
  return (
    <div className="container mx-auto pt-5 lg:pt-32 font-poppins">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl lg:text-5xl text-gray-600 font-extrabold tracking-widest uppercase">
          Don't Know Me ?
        </h1>
        <h2 className="text-3xl lg:text-5xl  text-gray-600 font-extrabold tracking-widest uppercase">
          Let me tell you
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center mx-10 lg:mx-22 py-5">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-3">
          <img
            className="w-auto h-auto object-contain"
            src={InstaPost1}
            alt="Gyan"
          />
          <span className="text-xl lg:text-2xl font-bold mx-10 lg:mx-32">
            I am Gyanendra Yadav. I love to travel and create beautiful vlogs &
            reels of beautiful natures, historical places. You can visit to my
            YouTube channel and watch my vlogs.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
