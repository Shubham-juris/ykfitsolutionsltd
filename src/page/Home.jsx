import React from "react";
import backgroundImageimage from "../assets/homeImage/homeImage.jpg";
import image from "../assets/ykfitImage/image.jpg";
import image1 from "../assets/ykfitImage/image1.jpg";
import image2 from "../assets/ykfitImage/image2.jpg";
import image4 from "../assets/ykfitImage/image4.jpg";
const Home = () => {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImageimage})` }}
      >
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2">
          <div className="bg-gray-300 bg-opacity-80 rounded-full p-16 text-center w-96 h-96 flex flex-col justify-center items-center mt-60">
            <h2 className="text-lg tracking-wide text-gray-800 font-medium mb-4 ">
              PROFESSIONAL <br />
              TECHNOLOGY <br />
              ASSISTANCE
            </h2>
            <button className="bg-black text-white py-2 px-6 mt-4 font-semibold shadow-md hover:bg-gray-800">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-400 py-16 px-6 lg:px-24">
        <div className="max-w-3xl text-left text-black">
          <h1 className="text-4xl font-bold mb-6">WELCOME</h1>

          <p className="text-lg mb-8">
            YKF IT Solutions provides you with best solutions for your software
            needs. From Integrated software to an aesthetic and customized
            website that describes your business in the best way possible, we
            have answers to any questions you might have for your
            technology-related requirements!
          </p>

          <button className="bg-black text-white px-6 py-3 shadow-lg hover:bg-gray-800 transition duration-300">
            FIND OUT MORE
          </button>
        </div>
      </div>
      <div className="bg-white px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          ABOUT YKF IT SOLUTIONS
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-2">
          <img
            src={image2}
            alt="Technical Work"
            className="w-full md:w-1/2 rounded shadow-md"
          />
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-sm font-semibold tracking-widest text-gray-600 mb-4">
              TECHNICAL EXPERIENCE
            </h2>
            <p className="text-gray-700 text-base mb-6">
              We are well-versed in a variety of operating systems, networks,
              and databases. At YKF IT Solutions we work with just about any
              technology that a small business would encounter. We use this
              expertise to help customers with small to mid-sized projects.
            </p>
            <button className="bg-gray-800 text-white px-6 py-2 shadow hover:bg-gray-900 transition">
              BOOK ONLINE
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="w-full md:w-1/2 text-center md:text-lift order-2 md:order-1">
            <h2 className="text-sm font-semibold tracking-widest text-gray-600 mb-4">
              HIGH ROI
            </h2>
            <p className="text-gray-700 text-base mb-6">
              Do you spend most of your IT budget on maintaining your current
              system? Many companies find that constant maintenance eats into
              their budget for new technology. By outsourcing your IT management
              to us, you can focus on what you do best—running your business.
            </p>
            <button className="bg-gray-800 text-white px-6 py-2 shadow hover:bg-gray-900 transition">
              SEE SERVICES
            </button>
          </div>
          <img
            src={image1}
            alt="High ROI"
            className="w-full md:w-1/2 rounded shadow-md order-1 md:order-2"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={image}
            alt="Team Collaboration"
            className="w-full md:w-1/2 rounded shadow-md"
          />
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-sm font-semibold tracking-widest text-gray-600 mb-4">
              SATISFACTION GUARANTEED
            </h2>
            <p className="text-gray-700 text-base mb-6">
              The world of technology can be fast-paced and scary. That’s why
              our goal is to provide an experience that is tailored to your
              company’s needs. No matter the budget, we pride ourselves on
              providing professional customer service. We guarantee you will be
              satisfied with our work.
            </p>
            <button className="bg-gray-800 text-white px-6 py-2 shadow hover:bg-gray-900 transition">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
      <div className="h-100 flex flex-col items-center justify-center bg-gray-500 text-white">
        <div className="text-center px-4 py-8">
          <h1 className="text-3xl font-bold mb-4 md:text-4xl text-black">
            CONTACT US
          </h1>
          <p className="text-lg mb-4 md:text-xl">
            BETTER YET, SEE US IN PERSON!
          </p>
          <p className="text-base mb-2 md:text-lg">
            We love our customers, so feel free <br /> to visit during normal
            business hours.
          </p>
          <div className="mb-4">
            <p className="text-base md:text-lg">YKF IT SOLUTIONS</p>
            <p className="text-base md:text-lg">
              #200, 808 4th Ave SW, Calgary AB T2P 3E8
            </p>
            <p className="text-base md:text-lg">ykfitSolutions@gmail.com</p>
            <p className="text-base md:text-lg">403-363-8474</p>
          </div>
          <div>
            <p className="text-base font-semibold md:text-lg">HOURS</p>
            <p className="text-base md:text-lg">
              Open today 09:00 a.m. – 05:00 p.m.
            </p>
          </div>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center h-160 flex items-center justify-center"
        style={{ backgroundImage: `url(${image4})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="relative text-center text-white">
          <h1 className="text-3xl font-bold tracking-wide">REVIEWS</h1>
          <div className="bg-black bg-opacity-50 mt-4 px-6 py-2 rounded">
            <p className="text-sm">Reviews coming soon!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
