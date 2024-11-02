import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import Button from "../../ui/Button"; // Custom Button component import
import { Link } from "react-router-dom";

// Navbar component for navigation with signup and login buttons
const Navbar = () => {
  return (
    // Main navigation bar container with fixed height and full width
    <nav className="h-[50px] fixed w-full items-center flex">
      {/* Central container with background color and spacing */}
      <div className="flex items-center w-[60%] m-auto justify-between bg-black">
        
        {/* Left section with a back arrow icon */}
        <div className="flex w-[50%] items-center justify-between">
          <div className="text-white">
            <IoIosArrowBack />
          </div>
        </div>

        {/* Right section with Signup and Login buttons */}
        <div className="flex">
          {/* Link to Signup page with custom Button component */}
          <Link to="/signup">
            <Button primaryColor={"white"} className="bg-white text-black py-1 px-3 rounded-md">
              SignUp
            </Button>
          </Link>
          
          {/* Link to Login page with standard button styling */}
          <Link to="/login">
            <button className="bg-white text-black py-1 px-3 rounded-md">Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
