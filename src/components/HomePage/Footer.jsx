import React from "react";

const Footer = () => {
  return (
    <div className="relative w-full bg-black flex flex-col items-center justify-center  md:p-20 text-white text-xs">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl mb-6">
        <ul className="flex flex-col space-y-2">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl  font-bold ">
            Job
          </h3>
          <p className="text-sm sm:font-bold md:text-md lg:text-md flex">
            The best website to find jobs of any category in any place any time.
          </p>
        </ul>
        <ul className="flex flex-col space-y-2">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl  font-bold ">
            Company
          </h3>
          <li>About Us</li>
          <li>Our Team</li>
          <li>Partners</li>
          <li>For Candidates</li>
          <li>For Employers</li>
        </ul>
        <ul className="flex flex-col space-y-2">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl  font-bold">
            Job Categories
          </h3>
          <li>Telecommunications</li>
          <li>Hotels & Tourism</li>
          <li>Construction</li>
          <li>Education</li>
          <li>Financial Services</li>
        </ul>
        <ul className="flex flex-col space-y-2">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl  font-bold ">
            Newsletter
          </h3>
          <p>Send an email to us.</p>
          <form action="">
            <div className="flex flex-col gap-3">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-3 py-3 rounded-xl border border-white text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="text"
                name="text"
                placeholder="Text Us"
                className="w-full p-3 py-3 rounded-xl border border-white text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="submit"
                className="w-full bg-blue-400 text-white font-bold py-3 rounded-xl cursor-pointer hover:bg-red-900 transition duration-200"
              >
                Subscribe now
              </button>
            </div>
          </form>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
