import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import BrowsePodcast from "../../BrowsePodcasts/BrowsePodcast"; // Component for browsing available podcasts

// SideBarPodCast component displays a section encouraging users to find podcasts to follow
const SideBarPodCast = () => {
  // State to track if podcasts are available (null means no podcasts currently followed)
  const [podcasts, setPodcasts] = useState(null);

  return (
    <div className="mt-5">
      {/* Display prompt to follow podcasts if no podcasts are currently set */}
      {podcasts === null && (
        <div className="bg-gray-800 w-full h-[150px] rounded-xl p-4">
          {/* Header text prompting the user to explore podcasts */}
          <h3 className="text-white font-bold text-md my-2">
            Let's find some podcasts to follow
          </h3>

          {/* Subtitle providing additional context about updates */}
          <h5 className="text-white font-bold text-sm">
            We'll keep you updated on the latest episodes
          </h5>

          {/* Link to navigate to podcast browsing */}
          <Link to="/BrowsePodcast">
            <button className="bg-white font-bold text-md text-black hover:px-3 p-2 my-3 rounded-2xl">
              Browse podcasts
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SideBarPodCast;
