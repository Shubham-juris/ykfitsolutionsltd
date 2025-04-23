import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Cpu } from "lucide-react";
import logo from '../../assets/homeImage/logo.webp'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "text-sm font-medium text-gray-800 hover:text-red-600 transition duration-200";
  const activeClass = "text-red-600 font-bold";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white bg-opacity-60 backdrop-blur-md fixed w-full z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to='/' >
            <div className="flex items-center cursor-pointer space-x-2 whitespace-nowrap">
              <img src={logo}  className="w-15 h-15  " alt="" />
              <span className="text-xl font-semibold text-gray-800">YKFit Solutions</span>
            </div>

          </NavLink>
          {/* Desktop Menu */}
          <div className="hidden md:flex justify-around items-center w-full ">
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
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 px-4 pb-4">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? `${activeClass} block` : `${linkClass} block`
              }
              onClick={() => setIsOpen(false)}
            >
              HOME
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? `${activeClass} block` : `${linkClass} block`
              }
              onClick={() => setIsOpen(false)}
            >
              SERVICES
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? `${activeClass} block` : `${linkClass} block`
              }
              onClick={() => setIsOpen(false)}
            >
              CONTACT US
            </NavLink>
            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                isActive ? `${activeClass} block` : `${linkClass} block`
              }
              onClick={() => setIsOpen(false)}
            >
              JOBS
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
