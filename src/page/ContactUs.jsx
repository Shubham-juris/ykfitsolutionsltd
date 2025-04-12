import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      {/* Contact Form Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-blue-50 w-full px-6 py-20">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 mb-10 text-lg">
            We'd love to hear from you. Please fill out the form and we’ll respond shortly.
          </p>

          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="w-full p-4 border border-gray-300 rounded-lg h-36 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="px-10 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-600 text-sm max-w-xl mx-auto">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
            <p className="mt-4 text-lg text-gray-700 font-medium max-w-2xl mx-auto">
              Let us tailor a service package that meets your needs. Tell us about your business,
              and we’ll get back to you with a custom solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Office Info */}
            <div className="bg-white p-8 rounded-xl shadow-md border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-600" /> Our Office
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong className="text-gray-900">YKFITSOLUTIONS</strong>
                <br /> 200 808 4th Ave SW
                <br /> Calgary, AB
              </p>
              <p className="text-gray-700 flex items-center gap-2 mt-4">
                <FaEnvelope className="text-blue-600" />
                <a
                  href="mailto:ykfitsolutions@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  ykfitsolutions@gmail.com
                </a>
              </p>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-8 rounded-xl shadow-md border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaClock className="text-blue-600" /> Business Hours
              </h3>
              <ul className="text-gray-700 space-y-2 text-lg">
                <li>Mon – Fri: <span className="font-medium">09:00 a.m. – 05:00 p.m.</span></li>
                <li>Sat: <span className="font-medium">Close</span></li>
                <li>Sun: <span className="font-medium">Close</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
