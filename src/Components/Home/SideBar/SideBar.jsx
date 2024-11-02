import React, { useState } from "react";
import SideBarHeader from "./SideBarHeader";          // Header component for sidebar
import SidebarLibraries from "./SidebarLibraries";    // Libraries section component for sidebar
import SidebarClose from "./SidebarClose";            // Component for minimized sidebar view
import SideBarCloseLibrary from "./SideBarCloseLibrary"; // Library section component for minimized sidebar

// Main Sidebar component that toggles between expanded and minimized views
const SideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // State to track if sidebar is expanded or minimized

  return (
    <div className="fixed h-full p-1 text-white">
      {/* Conditional rendering based on sidebarOpen state */}
      {sidebarOpen ? (
        // Expanded sidebar view
        <div className="w-full">
          {/* Header section with a function to toggle sidebar state */}
          <SideBarHeader fun={setSidebarOpen} />
          {/* Libraries section, passing the current state and function to toggle */}
          <SidebarLibraries state={sidebarOpen} fun={setSidebarOpen} />
        </div>
      ) : (
        // Minimized sidebar view
        <div>
          {/* Minimized view header section */}
          <SidebarClose />
          {/* Minimized libraries section, passing the current state and function to toggle */}
          <SideBarCloseLibrary state={sidebarOpen} fun={setSidebarOpen} />
        </div>
      )}
    </div>
  );
};

export default SideBar;
