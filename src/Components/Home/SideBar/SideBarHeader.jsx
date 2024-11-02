import React, { useState } from "react";
import { GoHomeFill } from "react-icons/go";              // Filled home icon (active)
import { IoSearchOutline } from "react-icons/io5";        // Outline search icon (inactive)
import { MdOutlineLocationSearching } from "react-icons/md"; // Filled search icon (active)
import { GoHome } from "react-icons/go";                  // Outline home icon (inactive)
import { Link } from "react-router-dom";                  // For linking to routes

// SideBarHeader component to display navigation options for Home and Search
const SideBarHeader = () => {
  // Track if Home or Search section is active
  const [homeOpen, setHomeOpen] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);

  // Handler to set Home as active and Search as inactive
  const homeHandeler = () => {
    setSearchOpen(false);
    setHomeOpen(true);
  };

  // Handler to set Search as active and Home as inactive
  const searchHandeler = () => {
    setSearchOpen(true);
    setHomeOpen(false);
  };

  return (
    <div className="rounded-md bg-[#0a0e16] m-1 p-4">
      {/* Sidebar navigation links */}
      <div className="pl-3">
        
        {/* Link to Home page */}
        <Link to={"/"}>
          <div
            className={`mb-5 flex gap-4 items-center hover:text-white ${
              !homeOpen && "text-gray-400" // Gray color when inactive
            }`}
            onClick={homeHandeler} // Set Home as active
          >
            {/* Conditionally render filled or outline icon based on active state */}
            {homeOpen ? (
              <GoHomeFill className="text-[30px]" />   // Filled home icon if active
            ) : (
              <GoHome className="text-[30px]" />       // Outline home icon if inactive
            )}
            <span className="text-md font-bold">Home</span> {/* Home text */}
          </div>
        </Link>

        {/* Link to Search page */}
        <Link to={"/search"}>
          <div
            className={`flex gap-4 items-center hover:text-white ${
              !searchOpen && "text-gray-400" // Gray color when inactive
            }`}
            onClick={searchHandeler} // Set Search as active
          >
            {/* Conditionally render outline or filled icon based on active state */}
            {!searchOpen ? (
              <IoSearchOutline className="text-[30px]" /> // Outline search icon if inactive
            ) : (
              <MdOutlineLocationSearching className="text-[30px]" /> // Filled search icon if active
            )}
            <span className="text-md font-bold">Search</span> {/* Search text */}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBarHeader;
