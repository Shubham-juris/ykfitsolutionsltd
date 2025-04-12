import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass =
    "text-sm font-medium text-gray-800 hover:text-red-600 transition duration-200";
  const activeClass = "text-red-600 font-bold";

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white bg-opacity-60 backdrop-blur-md fixed w-full z-10">
      <div className="flex items-center space-x-8">
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? `${activeClass}` : `${linkClass}`
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? `${activeClass}` : `${linkClass}`
              }
            >
              SERVICES
            </NavLink>
          </li>
        </ul>
      </div>
      <ul className="flex space-x-6">
        <li>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive ? `${activeClass}` : `${linkClass}`
            }
          >
            CONTACT US
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive ? `${activeClass}` : `${linkClass}`
            }
          >
            JOBS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
