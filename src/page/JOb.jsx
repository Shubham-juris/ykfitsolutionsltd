import React from "react";
import { Link } from "react-router-dom";

const JOb = () => {
  return (
    <div className="bg-white px-4 py-16 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        WE'RE HIRING!
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column: Job Listings */}
        <div>
          <h2 className="text-sm uppercase tracking-wide text-black-500 mb-4 font-bold">
            Join Our Team...
          </h2>

          <ul className="space-y-5 text-gray-700 mt-9">
            {[
              ["Software Developer", "2 Positions", "/software-developer"],
              ["Website Developer", "2 Positions", "/website-developer"],
              ["Data Analyst", "1 Position", "/data-analist"],
              [
                "Digital Marketing Coordinator",
                "1 Position",
                "/digital-marketig",
              ],
              ["Content Creator", "1 Position", "/contente-creator"],
              ["Bookkeeper", "2 Positions", "/bookkeeper"],
              [
                "Business Development Officer",
                "1 Position",
                "/business-development",
              ],
              ["Systems Engineer", "1 Position", "/systems-engineer"],
              ["Marketing Coordinator", "1 Position", "/marketing-coordinator"],
            ].map(([title, count, link], i) => (
              <li key={i} className="flex justify-between">
                <div>
                  • {title}
                  <div className="text-sm text-blue-500 hover:underline cursor-pointer">
                    <Link to={link}>More</Link>
                  </div>
                </div>
                <span>{count}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Application Form */}
        <div>
          <h2 className="text-sm uppercase tracking-wide text-black mb-4 font-bold">
            Apply Now!
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            {/* File Upload UI */}
            <div className="flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 002.828 2.828L18 9.828M6 18h.01"
                  />
                </svg>
                <span>Attach Resume</span>
              </div>
              <span>Attachments (0)</span>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 rounded-md font-semibold tracking-wide hover:bg-gray-900 shadow"
            >
              SUBMIT APPLICATION
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JOb;
