import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg py-20 md:py-20 px-4 mx-auto flex flex-col justify-center h-full max-sm:pb-48">
        <div className="mt-20 max-sm:text-[1rem] max-sm:pt-40">
          <p className="text-4xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl md:text-md mt-10 md:mt-6 max-sm:text-[1rem]">
          I am Satyam Jha, a recent MCA graduate from PSIT Kanpur, and a
          passionate front-end developer. I specialize in crafting engaging and
          intuitive user interfaces, with a solid foundation in HTML, CSS, and
          JavaScript.
        </p>

        <p className="text-xl md:text-md mb-10 mt-10 md:mt-6 max-sm:text-[1rem]">
          I thrive on transforming design concepts into pixel-perfect,
          responsive web experiences. By staying updated on the latest front-end
          technologies and trends, I aim to leverage my skills to deliver
          seamless user interactions and enhance overall usability.
        </p>

        <p className="text-xl md:text-md mb-10 max-sm:text-[1rem]">
          Collaborative by nature, I excel in multidisciplinary teams,
          effectively bridging the gap between design and development. Let’s
          connect and collaborate on innovative web solutions that bring ideas
          to life.
        </p>
      </div>
    </div>
  );
};

export default About;
