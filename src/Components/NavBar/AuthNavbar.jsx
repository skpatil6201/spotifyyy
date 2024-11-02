import React from 'react';
import { Link } from "react-router-dom";

// AuthNavbar component displays a simple navigation bar for authentication pages
const AuthNavbar = () => {
  return (
    <div>
      {/* Navigation bar container */}
      <nav className="h-[50px] fixed w-full items-center flex">
        {/* Central container for aligning content */}
        <div className="flex items-center w-[60%] m-auto justify-between">
          
          {/* Branding section on the left */}
          <div className="flex w-[50%]">
            <span>Spotify</span>
          </div>
          
          {/* Login prompt with link for registered users */}
          <div>
            Already Registered?{' '}
            <Link to="/login">
              <span className="text-blue-400 font-bold">Login</span>
            </Link>{' '}
            Here
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AuthNavbar;
