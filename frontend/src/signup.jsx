import React, { useState } from "react";
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [isVisible, setIsVisible] = useState(true); // Control visibility
    const closePopup = () => {
        setIsVisible(false);
    };
    if (!isVisible) return null; // Hide component if not visible
    return (
    <section className="bg-gray-1 py-5  lg:py-[0px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] rounded-lg bg-white px-10 py-4 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
            <button 
                className="absolute top-4 right-4 text-gray-600 dark:text-white hover:text-red-500"
                onClick={closePopup}
            >
            &times; {/* This is the 'X' symbol */}
            </button>
              <div className="mb-10 text-center md:mb-16">
                <a
                  href="/#"
                  className="mx-auto inline-block max-w-[160px]"
                >
                  <img
                    src="/Launch_Vision_logo.svg"
                    alt="logo"
                  />
                </a>
              </div>
              <form>
                <InputBox type="text" name="username" placeholder="Username" />
                <InputBox type="email" name="email" placeholder="Email" />
                <InputBox type="password" name="password" placeholder="Password" />
                <InputBox
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <div className="mb-10">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>
              <Link to="/login"
                className="mb-2 inline-block text-base text-dark hover:text-primary hover:underline dark:text-white"
              >
                Already have an account? Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

const InputBox = ({ type, placeholder, name }) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
      />
    </div>
  );
};
