import React, { useState } from "react";
import { VscLibrary } from "react-icons/vsc";   // Icon for active library view
import { BiLibrary } from "react-icons/bi";     // Icon for inactive library view
import { FaPlus } from "react-icons/fa6";       // Icon for adding a new item

// SideBarCloseLibrary component for a minimized library section in the sidebar
// Accepts `state` (open/close) and `fun` (toggle function) as props
const SideBarCloseLibrary = ({ state, fun }) => {
  const [libraryOpen, setLibraryOpen] = useState(false); // Tracks library section's active state

  // Handler to activate the library section and update parent state
  const libraryHandeler = () => {
    setLibraryOpen(true);   // Activates the library icon state
    fun(!state);            // Toggles the sidebar's state in the parent component
  };

  return (
    <div className="rounded-md bg-[#0a0e16] m-1 p-4 h-[70vh]">
      <div>
        {/* Library icon section */}
        <div className="my-2">
          <div
            className={`flex justify-center items-center gap-2 hover:text-white ${
              !libraryOpen && "text-gray-400" // Grays out icon if inactive
            }`}
            onClick={libraryHandeler} // Activates library section
          >
            {/* Conditional icon rendering based on library's active state */}
            {!libraryOpen ? (
              <BiLibrary className="text-[30px]" />   // Inactive library icon
            ) : (
              <VscLibrary className="text-[30px]" />  // Active library icon
            )}
          </div>

          {/* Plus icon for adding a new item (currently visual only) */}
          <div className="flex justify-center my-5 gap-5 items-center text-gray-400 text-[15px]">
            <FaPlus className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarCloseLibrary;
