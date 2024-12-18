import React from "react";
import houseMarketPlace from "../assets/portfolio/house-market-sale-and-rent.vercel.app_.png";
import weather from "../assets/portfolio/next-js-weather-app-nine.vercel.app_.png";
import contactFormValidation from "../assets/portfolio/contact-form.jpg";
import lms from "../assets/portfolio/learning-management-system-delta-seven.vercel.app_.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: houseMarketPlace,
      name: "House Market Place",
      demo: "https://house-market-sale-and-rent.vercel.app/",
      code: "https://github.com/satyamJha002/House-Market-Sale-and-Rent",
    },
    {
      id: 2,
      src: weather,
      name: "Weather",
      demo: "https://next-js-weather-app-eta.vercel.app/",
      code: "https://github.com/satyamJha002/NextJS-Weather-App",
    },
    {
      id: 3,
      src: contactFormValidation,
      name: "Contact Form Validation",
      code: "https://github.com/satyamJha002/contact-form-MERN-stack",
    },
    {
      id: 4,
      src: lms,
      name: "Learning Management System",
      demo: "https://learning-management-system-delta-seven.vercel.app/",
      code: "https://github.com/satyamJha002/Learning-Management-System",
    },
  ];

  return (
    <div
      name="portfolio"
      id="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="py-20 md:py-5 px-5 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">
            Check out some of my work right here.To see my work you can right
            click the image and view it in another tab as well as Code.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code, name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt="demo-image"
                  className="rounded-md duration-200 hover:scale-105"
                />
                <span className="flex justify-center mt-3 text-2xl md:text-xl font-signature">
                  {name}
                </span>
              </a>
              <div className="mt-4">
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex bg-white text-xl font-semibold hover:bg-black hover:text-white text-black rounded items-center justify-center py-4"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
