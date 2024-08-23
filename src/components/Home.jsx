import React from "react";
import heroImg from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import TypeWriter from "./TypeWriter";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-3 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="mt-20 md:mt-0 text-4xl sm:text-7xl font-bold text-white">
            <TypeWriter text="Frontend Developer" delay={85} />
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            {" "}
            I'm a frontend developer dedicated to crafting visually appealing
            and user-friendly web applications. With expertise in HTML, CSS, and
            JavaScript, I transform ideas into interactive, responsive, and
            accessible websites. Let's build something amazing together!
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={30} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={heroImg}
            alt="my-profile"
            className="rounded-full mx-auto w-1/2 md:w-100 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
