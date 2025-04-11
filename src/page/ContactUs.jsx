import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="w-full max-w-xl p-6">
          <h2 className="text-3xl font-bold text-center mb-6">CONTACT US</h2>
          <p className="text-center text-gray-600 mb-6">
            FOR QUESTIONS OR QUOTES:
          </p>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                className="w-full p-2 border border-gray-300 rounded h-32"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex  items-center justify-center bg-white">
        <div className="w-full max-w-md p-6 space-y-6  text-center ">
          <p className="text-sm text-gray-500">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
          <p className="text-lg">
            Let us tailor a service package that meets your needs. Tell us a
            little about your business, and we will get back to you with some
            ideas as soon as possible.
          </p>
          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-bold">YKFITSOLUTIONS</h3>
              <p>200 808 4th Ave SW Calgary, AB</p>
              <p>ykfitsolutions@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">HOURS</h3>
              <p>Mon 09:00 a.m. - 05:00 p.m.</p>
              <p>Tue 09:00 a.m. - 05:00 p.m.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
