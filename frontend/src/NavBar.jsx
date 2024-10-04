import React, { useState } from "react";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="flex w-full items-center">
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/" className="block w-full py-5">
              {/* Always use dark logo */}
              <img
                src="/Launch_Vision_logo.svg"
                alt="logo"
                className="block"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${
                  navbarOpen ? "navbarTogglerActive" : ""
                }`}
                id="navbarToggler"
              >
                {/* Hamburger icon */}
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
              </button>
              {/* Mobile and Desktop Navbar */}
              <nav
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg  px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                  navbarOpen ? "" : "hidden"
                }`}
                id="navbarCollapse"
              >
                <ul className="block lg:flex">
                  <li>
                    <Link to="/pslv"
                      className="flex py-2 text-base font-medium text-white hover:text-white lg:ml-12 lg:inline-flex"
                    >
                      PSLV
                    </Link>
                  </li>
                  <li>
                    <Link to="/sslv"
                      className="flex py-2 text-base font-medium text-white hover:text-white lg:ml-12 lg:inline-flex"
                    >
                      SSLV
                    </Link>
                  </li>
                  <li>
                    <Link to="/gslv"
                       className="flex py-2 text-base font-medium text-white hover:text-white lg:ml-12 lg:inline-flex"
                    >
                      GSLV
                    </Link>
                  </li>
                  <li>
                    <a href="./upcoming.html"
                       className="flex py-2 text-base font-medium text-white hover:text-white lg:ml-12 lg:inline-flex"
                    >
                      Upcoming Events
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <Link to="/login" className="px-7 py-3 text-base font-medium text-white hover:text-primary">
                Login
              </Link>
              <Link to="/signup"
                className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
