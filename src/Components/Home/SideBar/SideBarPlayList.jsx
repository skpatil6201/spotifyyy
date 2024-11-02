import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import CreatePlaylis from "../../CreatePlaylist/CreatePlaylis"; // Component for creating a playlist

// SideBarPlayList component displays a section to create the first playlist
const SideBarPlayList = () => {
  return (
    <div className="mt-3">
      {/* Container for playlist creation box */}
      <div className="bg-gray-800 w-full h-[150px] rounded-xl p-4">
        
        {/* Header text prompting the user to create a playlist */}
        <h3 className="text-white font-bold text-md my-2">
          Create Your First Playlist
        </h3>
        
        {/* Subtitle providing additional information */}
        <h5 className="text-white font-bold text-sm">
          It's easy, we'll help you
        </h5>

        {/* Link component for navigation to the playlist creation page */}
        <Link to="/CreatePlaylis">
          <button
            className="bg-white font-bold text-md text-black hover:px-3 p-2 my-3 rounded-2xl"
          >
            Create Playlist
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SideBarPlayList;
