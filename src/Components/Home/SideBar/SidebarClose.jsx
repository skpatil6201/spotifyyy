import React, { useState } from "react";
import { GoHomeFill, GoHome } from "react-icons/go"; // Icons for home button
import { IoSearchOutline } from "react-icons/io5";   // Outline icon for search button
import { MdOutlineLocationSearching } from "react-icons/md"; // Icon for active search state
import { Link } from "react-router-dom";              // Link component for routing

// SidebarClose component for minimized sidebar with basic navigation options
const SidebarClose = () => {
  // State to track active button: home or search
  const [homeOpen, setHomeOpen] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);

  // Handler for activating the home button and deactivating search
  const homeHandeler = () => {
    setSearchOpen(false);
    setHomeOpen(true);
  };

  // Handler for activating the search button and deactivating home
  const searchHandeler = () => {
    setSearchOpen(true);
    setHomeOpen(false);
  };

  return (
    <div className="rounded-md bg-[#0a0e16] m-1 p-4 pl-3">
      {/* Link to home route */}
      <Link to="/">
        <div
          className={`mb-5 flex gap-4 justify-center items-center hover:text-white ${
            !homeOpen && "text-gray-400" // Grays out the icon if not active
          }`}
          onClick={homeHandeler} // Triggers home activation
        >
          {homeOpen ? (
            <GoHomeFill className="text-[30px]" /> // Filled home icon when active
          ) : (
            <GoHome className="text-[30px]" />     // Outline home icon when inactive
          )}
        </div>
      </Link>

      {/* Link to search route */}
      <Link to="/search">
        <div
          className={`flex gap-4 justify-center items-center hover:text-white ${
            !searchOpen && "text-gray-400" // Grays out the icon if not active
          }`}
          onClick={searchHandeler} // Triggers search activation
        >
          {!searchOpen ? (
            <IoSearchOutline className="text-[30px]" /> // Outline search icon when inactive
          ) : (
            <MdOutlineLocationSearching className="text-[30px]" /> // Active search icon when selected
          )}
        </div>
      </Link>
    </div>
  );
};

export default SidebarClose;
