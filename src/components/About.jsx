import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-9 mx-auto flex flex-col justify-center h-full">
        <div className="mt-20">
          <p className="text-4xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl md:text-md mt-10 md:mt-6">
          I am Satyam Jha and I recently graduated from MCA from PSIT Kanpur, I
          am a Passionate front-end developer dedicated to creating engaging and
          intuitive user interfaces. With a strong foundation in HTML, CSS, and
          JavaScript. .
        </p>

        <br />

        <p className="text-xl md:text-md mb-10 ">
          Collaborative by nature, I excel in multidisciplinary teams,
          communicating effectively to bridge the gap between design and
          development. Let's connect and collaborate on bringing innovative web
          solutions to life.
        </p>
      </div>
    </div>
  );
};

export default About;
