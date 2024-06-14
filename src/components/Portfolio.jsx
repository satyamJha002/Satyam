import React from "react";
import ecoyan from "../assets/portfolio/ecoyaan-new.netlify.app_.png";
import weather from "../assets/portfolio/next-js-weather-app-nine.vercel.app_.png";
import contactFormValidation from "../assets/portfolio/contact-form-valid-007.netlify.app_.png";
import faqAccordian from "../assets/portfolio/faq-accordian-main.netlify.app_.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ecoyan,
      demo: "https://ecoyaan-new.netlify.app/",
      code: "https://github.com/satyamJha002/Ecoyaan-new",
    },
    {
      id: 2,
      src: weather,
      demo: "https://next-js-weather-app-nine.vercel.app/",
      code: "https://github.com/satyamJha002/NextJS-Weather-App",
    },
    {
      id: 3,
      src: contactFormValidation,
      demo: "https://contact-form-valid-007.netlify.app/",
      code: "https://github.com/satyamJha002/html-css-practice-projects/tree/master/contact-form-main",
    },
    {
      id: 4,
      src: faqAccordian,
      demo: "https://faq-accordian-main.netlify.app/",
      code: "https://github.com/satyamJha002/html-css-practice-projects/tree/master/faq-accordion-main",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="py-8 px-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
