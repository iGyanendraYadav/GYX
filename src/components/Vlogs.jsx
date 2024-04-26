import React from "react";
import { myPictures, myVlogs } from "./data/mydata";
import YouTube from "react-youtube";
import { BsHeartFill } from "react-icons/bs";
import { MdOutlinePlace } from "react-icons/md";

const Vlogs = () => {
  return (
    <div className="container flex flex-col justify-center items-center space-y-3">
      <div className="flex flex-col justify-center items-center space-y-2">
        <h className="text-5xl font-extrabold text-gray-700 uppercase tracking-widest">
          Watch My
        </h>
        <h2 className="text-4xl font-extrabold text-gray-700 uppercase tracking-widest">
          Video Logs
        </h2>
      </div>

      {/* 
      ---------------- */}
      <div className="container mx-auto">
        <div className="videos grid grid-cols-1 gap-8 mx-12 lg:mx-16 mt-2 mb-0">
          {myVlogs.map((sample) => {
            return (
              <div
                key={sample.vlogId}
                className="flex flex-col justify-start items-start"
              >
                <iframe
                  className="lg:w-[100%] lg:h-[500px] w-[100%] h-[300px] "
                  src={`https://www.youtube.com/embed/${sample.vlogId}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />

                <span className="flex justify-center items-center space-x-2 text-lg lg:text-3xl pt-3">
                  <span className="font-bold">{sample.vlogName}</span>
                </span>
                <span className="flex justify-center items-center space-x-2">
                  {" "}
                  <MdOutlinePlace /> <span>{sample.location}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* --------------------- */}
    </div>
  );
};

export default Vlogs;
