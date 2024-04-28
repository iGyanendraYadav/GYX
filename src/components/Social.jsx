import React from "react";
import { Link } from "react-router-dom";
import social from "./images/social.jpg";
import {
  FaArrowRight,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaVideo,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Social = () => {
  return (
    <div className="container mx-auto mt-10 lg:mt-5 font-poppins">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src={social}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Connect Virtually
              </h2>

              <p className="mt-4 text-gray-600">
                Feel free to connect with me on my social handels. You can ask
                me about the travel, video editing, reels, destinations & more.
              </p>

              <Link
                to="/reels"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Watch Reels
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col justify-center items-center">
          <span className="text-2xl lg:text-3xl text-gray-600 font-bold">
            Join Me
          </span>
          <span className="text-lg px-10 lg:px-32 py-5">
            Wanna join me on socail handles. Then, What are you waiting for ?
            Connect with me just right now on any platform using the link below
            mentioned. And I am ready to hear you ...
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <span>
              <a
                href="https://www.facebook.com/iGyanendraYadav/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400  flex-row justify-center items-center space-x-2"
              >
                <span className="text-xl">
                  <FaFacebookSquare />
                </span>{" "}
                <span>@iGyanendraYadav</span>
              </a>
            </span>

            <span>
              <a
                href="https://www.instagram.com/iGyanendraYadav/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex rounded bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#fcb045] focus:outline-none focus:ring focus:ring-yellow-400  flex-row justify-center items-center space-x-2"
              >
                <span className="text-xl ">
                  <FaInstagram />
                </span>{" "}
                <span>@iGyanendraYadav</span>
              </a>
            </span>

            <span>
              <a
                href="https://twitter.com/iGyanendraYadav"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex rounded bg-[#00acee] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#00acea] focus:outline-none focus:ring focus:ring-yellow-400  flex-row justify-center items-center space-x-2"
              >
                <span className="text-xl">
                  <FaTwitter />
                </span>{" "}
                <span>@iGyanendraYadav</span>
              </a>
            </span>

            <span>
              <a
                href="https://wa.me/+919795222121"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex rounded bg-[#25D366] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#128C7E] focus:outline-none focus:ring focus:ring-yellow-400  flex-row justify-center items-center space-x-2"
              >
                <span className="text-xl">
                  <FaWhatsapp />
                </span>{" "}
                <span>+91 8********6</span>
              </a>
            </span>

            <span>
              <a
                href="https://www.youtube.com/@TheGyanendraYadavVlogs"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex rounded bg-[#FF0000] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#FF0011] focus:outline-none focus:ring focus:ring-yellow-400  flex-row justify-center items-center space-x-2"
              >
                <span className="text-xl">
                  <FaVideo />
                </span>{" "}
                <span>@TheGyanendraYadavVlogs</span>
              </a>
            </span>

            <span>
              <a
                href="https://www.youtube.com/@GyanendraYadav"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex rounded bg-[#FF0000] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#FF0011] focus:outline-none focus:ring focus:ring-yellow-400  flex-row justify-center items-center space-x-2"
              >
                <span className="text-xl">
                  <FaYoutube />
                </span>{" "}
                <span>@GyanendraYadav</span>
              </a>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Social;
