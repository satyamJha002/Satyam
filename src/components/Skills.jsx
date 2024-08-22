import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import git from "../assets/git.png";
import mongo from "../assets/mongo.png";
import bootstrap from "../assets/bootstrap.png";
import react from "../assets/react.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS3",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: github,
      title: "GTIHUB",
      style: "shadow-gray-400",
    },
    {
      id: 5,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: git,
      title: "GIT",
      style: "shadow-red-500",
    },
    {
      id: 7,
      src: mongo,
      title: "MONGODB",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: bootstrap,
      title: "BOOTSTRAP",
      style: "shadow-purple-500",
    },
    {
      id: 9,
      src: react,
      title: "REACT",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="skills"
      id="skills"
      className="flex flex-col bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mt-20 md:mt-6">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
