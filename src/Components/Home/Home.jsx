import React from "react";
import SideBar from "./SideBar/SideBar"; // Sidebar component for navigation
import Navbar from "../NavBar/Navbar"; // Navbar component at the top
import PopularArtist from "../pages/PopularArtist"; // Section for displaying popular artists
import PlayList from "../pages/PlayList"; // Section for displaying playlists
import Album from '../pages/Album'; // Section for displaying albums

// Home component serves as the main layout, containing sidebar, navbar, and main sections
const Home = () => {
  return (
    <div>
      {/* Sidebar for main navigation */}
      <SideBar />
      
      {/* Navbar positioned above main content */}
      <div className="flex ml-8 w-[60%]">
        <Navbar />
      </div>
      
      {/* Main content area displaying artists, playlists, and albums */}
      <div className="w-[3/4]">
        <PopularArtist />
        <PlayList />
        <Album />
      </div>
    </div>
  );
};

export default Home;
