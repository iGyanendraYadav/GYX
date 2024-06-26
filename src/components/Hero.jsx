import React from "react";
import instaPost1 from "./images/InstaPost1.jpg";
import instaPost2 from "./images/InstaPost2.jpg";
import instaPost10 from "./images/InstaPost10.jpg";
import { Link } from "react-router-dom";
import { FaArrowCircleRight, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="container mx-auto mt-10 lg:mt-5 font-poppins">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src={instaPost1}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Witness The Adventure
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <Link
                to="/vlogs"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Watch My Vlogs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                    Captures
                  </h2>

                  <p className="mt-4 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas rerum quam amet provident nulla error!
                  </p>
                </header>

                <Link
                  to="/gallery"
                  className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                  Show All
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <a href="#" className="group block">
                    <img
                      src={instaPost2}
                      alt="instapost2"
                      className="aspect-square w-full rounded object-cover"
                    />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Humayun's Tomb
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">New Delhi</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="group block">
                    <img
                      src={instaPost10}
                      alt="instapost10"
                      className="aspect-square w-full rounded object-cover"
                    />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Safdarjung's Tomb
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">New Delhi</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col justify-center items-center">
          <span className="text-2xl lg:text-3xl text-gray-600 font-bold uppercase">
            Connect with Me
          </span>
          <span className="text-lg lg:text-xl text-gray-600 px-10 lg:px-32 py-5 lg:py-10">
            Hey, I want to share you a lot of things like amazing visuals, vibe,
            energetic and awesome moments, vlogs , pictures and offcourse reels.
            So you can follow me on Instagram, YouTube & Facebook. I will always
            try to respond to your comments and DMs.
          </span>
          <div className="flex flex-row justify-center items-center">
            <Link
              to="/social"
              className="mt-2 flex rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400  flex-row justify-center items-center space-x-2"
            >
              <span>Take Me 2 Social</span>{" "}
              <span>
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
