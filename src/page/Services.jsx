import React from "react";
import image3 from "../assets/ykfitImage/image3.jpg";
import image7 from "../assets/ykfitImage2/image10.jpg";
import image9 from "../assets/ykfitImage2/image9.jpg";
import image11 from "../assets/ykfitImage2/image11.jpg";
import image8 from "../assets/ykfitImage2/image8.jpg";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
const Services = () => {
  return (
    <>
      <div className="relative w-full h-96 bg-black">
        {/* Background Image */}
        <img
          src={image3}
          alt="Services Background"
          className="w-full h-full object-cover opacity-70"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">OUR SERVICES</h1>
        </div>
      </div>

      <div className=" flex flex-col items-center justify-center bg-white text-black">
        {/* Header Text */}
        <div className="text-center mb-10 py-2 mt-20">
          <h3 className="text-4xl font-medium mb-2">SOFTWARE DEVELOPMENT</h3>
          <p className="text-lg py-8">
            We use advanced technologies to deliver high-quality solutions{" "}
            tailored to our customer's requirements. Our proficiency in the
            <br />
            latest software technologies, design trends, consultancy services
            and agile process aids have created software for logistics services,
            <br />
            restaurants, schools and colleges, etc., to ongoing maintenance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Software Development */}
          <div className="bg-white p-4 rounded-lg text-center">
            <img
              src={image7}
              alt="Software Development"
              className="w-full h-88 object-cover mb-4 rounded "
            />
            <h3 className="text-xl font-bold mb-2 py-8 ">
              SOFTWARE DEVELOPMENT
            </h3>
            <p className="text-sm">
              We use advanced technologies to deliver high-quality solutions br
              tailored to our customer's requirements. Our proficiency in the
              latest software technologies, design trends, consultancy services
              and agile process aids have created software for logistics
              services, restaurants, schools and colleges, etc., to ongoing
              maintenance.
            </p>
          </div>
          {/* Website Development */}
          <div className="bg-white p-4 rounded-lg text-center">
            <img
              src={image9}
              alt="Website Development"
              className="w-full h-88 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-bold mb-2 py-8">WEBSITE DEVELOPMENT</h3>
            <p className="text-sm">
              Our website development team creates well-applications designed to
              meet specific business requirements. Having a website surely will
              give your business the online presence it needs. YKF we offer your
              On-site and remote support, workstation management and maintenance
              and mobile device.
            </p>
          </div>
          {/* Office 365 Integration */}
          <div className="bg-white p-4 rounded-lg text-center">
            <img
              src={image11}
              alt="Office 365 Integration"
              className="w-full h-88 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-bold mb-2 py-8">
              OFFICE 365 INTEGRATION
            </h3>
            <p className="text-sm">
              Our website development team creates well-applications designed to
              meet specific business requirements. Having a website surely will
              give your business the online presence it needs. YKF we offer your
              On-site and remote support, workstation management and maintenance
              and mobile device.
            </p>
          </div>
          {/* Desktop & User Support */}
          <div className="bg-white p-4 rounded-lg text-center">
            <img
              src={image8}
              alt="Desktop & User Support"
              className="w-full h-88 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-bold mb-2 py-8">
              DESKTOP & USER SUPPORT
            </h3>
            <p className="text-sm">
              Our experienced team will help you from day one from installing by
              creating consistency and reliability in your infrastructure. At
              YKF we offer your On-site and remote support, workstation
              management and maintenance and mobile device. YKF we offer your
              On-site and remote support, workstation management and maintenance
              and mobile device.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-600 text-white px-4 py-16">
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
          <p className="text-base md:text-lg font-semibold">HOURS</p>
          <div className="flex items-center justify-center gap-3">
            <Clock className="w-5 h-5 text-white" />
            <div className="text-center">
              <p className="text-base md:text-lg">
                Open today 09:00 a.m. – 05:00 p.m.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
