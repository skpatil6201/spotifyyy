import React, { useState } from "react";
import { VscLibrary } from "react-icons/vsc";         // Icon for opened library view
import { BiLibrary } from "react-icons/bi";           // Icon for closed library view
import { FaPlus, FaArrowRight } from "react-icons/fa6"; // Icons for add and navigate actions
import SideBarPlayList from "./SideBarPlayList";      // Component for displaying playlist section
import SideBarPodCast from "./SideBarPodCast";        // Component for displaying podcast section

// SidebarLibraries component to display user's library options, including playlists and podcasts
const SidebarLibraries = ({ state, fun }) => {
  const [libraryOpen, setLibraryOpen] = useState(false); // Track if library is expanded

  // Toggle library view and propagate state change to parent component
  const libraryHandeler = () => {
    setLibraryOpen(true);  // Open the library view
    fun(!state);           // Update parent state to reflect toggle
  };

  return (
    <div className="rounded-md bg-[#0a0e16] m-1 p-4 h-[70vh]">
      <div>
        {/* Header section with library icon and actions */}
        <div className="pl-3 flex justify-between my-2">
          {/* Library title with icon - switches based on library open state */}
          <div
            className={`flex items-center gap-2 hover:text-white ${
              !libraryOpen && "text-gray-400" // Set to gray when closed
            }`}
            onClick={libraryHandeler} // Handle library toggle
          >
            {/* Conditionally render icons based on library open state */}
            {!libraryOpen ? (
              <BiLibrary className="text-[30px]" /> // Closed icon
            ) : (
              <VscLibrary className="text-[30px]" /> // Opened icon
            )}
            <span className="text-md font-bold">Your Libraries</span>
          </div>

          {/* Icons for add new item and navigate, with hover effects */}
          <div className="flex gap-5 items-center text-gray-400 text-[15px] pr-3">
            <FaPlus className="hover:text-white cursor-pointer" />      {/* Add new item icon */}
            <FaArrowRight className="hover:text-white cursor-pointer" /> {/* Navigate icon */}
          </div>
        </div>

        {/* Playlist and Podcast sections */}
        <SideBarPlayList />  {/* Display playlist creation option */}
        <SideBarPodCast />   {/* Display podcast browsing option */}
      </div>
    </div>
  );
};

export default SidebarLibraries;
