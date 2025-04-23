import React from "react";
import backgroundImageimage from "../assets/homeImage/homeImage.webp";
import image from "../assets/ykfitImage/image.webp";
import image1 from "../assets/ykfitImage/image1.webp";
import image2 from "../assets/ykfitImage/image2.webp";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
const Home = () => {
  return (
    <>
      <div
        className="w-full h-[100vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImageimage})` }}
      ></div>
      <div className="bg-white-200 flex flex-col justify-center mx-auto max-w-7xl py-16 px-6 lg:px-24">
        <div className="max-w-3xl text-left text-gray-800">
          <h1 className="text-4xl font-bold mb-6">WELCOME</h1>
          <p className="text-lg mb-8">
            YKF IT Solutions provides you with best solutions for your software
            needs. From Integrated software to an aesthetic and customized
            website that describes your business in the best way possible, we
            have answers to any questions you might have for your
            technology-related requirements!
          </p>
          <button className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">
            FIND OUT MORE
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-300 text-white px-4 py-12">
        <div className="bg-white px-6 md:px-20 py-12 max-w-7xl w-full rounded-md shadow-md">
          <h1 className="text-3xl md:text-5xl font-medium text-center mb-12 text-gray-800">
            ABOUT YKF IT SOLUTIONS
          </h1>

          {/* Section 1 */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
            <img
              src={image2}
              alt="Technical Work"
              className="w-full md:w-1/2 h-auto rounded shadow-md"
            />
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-lg font-semibold tracking-widest text-gray-600 mb-4">
                TECHNICAL EXPERIENCE
              </h2>
              <p className="text-gray-700 text-base mb-6">
                We are well-versed in a variety of operating systems, networks,
                and databases. At YKF IT Solutions, we work with just about any
                technology that a small business would encounter. We use this
                expertise to help customers with small to mid-sized projects.
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">
                  BOOK ONLINE
                </button>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
            <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
              <h2 className="text-lg font-semibold tracking-widest text-gray-600 mb-4">
                HIGH ROI
              </h2>
              <p className="text-gray-700 text-base mb-6">
                Do you spend most of your IT budget on maintaining your current
                system? Many companies find that constant maintenance eats into
                their budget for new technology. By outsourcing your IT
                management to us, you can focus on what you do best—running your
                business.
              </p>
              <button className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">
                SEE SERVICES
              </button>
            </div>
            <img
              src={image1}
              alt="High ROI"
              className="w-full md:w-1/2 h-auto rounded shadow-md order-1 md:order-2"
            />
          </div>

          {/* Section 3 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src={image}
              alt="Team Collaboration"
              className="w-full md:w-1/2 h-auto rounded shadow-md"
            />
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-lg font-semibold tracking-widest text-gray-600 mb-4">
                SATISFACTION GUARANTEED
              </h2>
              <p className="text-gray-700 text-base mb-6">
                The world of technology can be fast-paced and scary. That’s why
                our goal is to provide an experience that is tailored to your
                company’s needs. No matter the budget, we pride ourselves on
                providing professional customer service. We guarantee you will
                be satisfied with our work.
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-gray-500 text-white px-4 py-16">
        <div className="text-center max-w-2xl w-full">
          <h1 className="text-3xl md:text-4xl font-bold mb-14">CONTACT US</h1>
          <p className="text-lg md:text-xl mb-2 font-semibold">
            BETTER YET, SEE US IN PERSON!
          </p>
          <p className="text-base md:text-lg text-gray-200 mb-8">
            We love our customers, so feel free to visit during normal business
            hours.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-white" />
              <p className="text-base md:text-lg">
                #200, 808 4th Ave SW, Calgary AB T2P 3E8
              </p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-5 h-5 text-white" />
              <p className="text-base md:text-lg">ykfitSolutions@gmail.com</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-5 h-5 text-white" />
              <p className="text-base md:text-lg">403-363-8474</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Clock className="w-5 h-5 text-white" />
            <div className="text-center">
              <p className="text-base md:text-lg font-semibold">HOURS</p>
              <p className="text-base md:text-lg">
                Open today 09:00 a.m. – 05:00 p.m.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center h-120 flex items-center justify-center"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="absolute inset-0  opacity-20"></div>
        <div className="relative text-center text-white">
          <h1 className="text-6xl font-bold tracking-wide">REVIEWS</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
