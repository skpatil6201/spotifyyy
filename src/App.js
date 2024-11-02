import { Route, Routes } from "react-router-dom"; // Importing routing components
import "./App.css"; // Main stylesheet for the application
import Home from "./Components/Home/Home"; // Importing the Home component
import SignUp from "./Components/pages/SignUp"; // Importing the SignUp page component
import Login from "./Components/pages/Login"; // Importing the Login page component
import Wrapper from "./Components/Wrapper"; // Wrapper component for layout structure
import Search from "./Components/Search/Search"; // Importing the Search component
import Album from "./Components/pages/Album"; // Importing the Album page component
import CreatePlaylis from "./Components/CreatePlaylist/CreatePlaylis"; // Importing the Create Playlist component
import BrowsePodcast from "./Components/BrowsePodcasts/BrowsePodcast"; // Importing the Browse Podcast component

// Main application component
function App() {
  return (
    <Wrapper>
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />

        {/* Route for the search page */}
        <Route path="/search" element={<Search />} />

        {/* Route for the sign-up page */}
        <Route path="/signup" element={<SignUp />} />

        {/* Route for the login page */}
        <Route path="/login" element={<Login />} />

        {/* Route for browsing podcasts */}
        <Route path="/BrowsePodcast" element={<BrowsePodcast />} />

        {/* Route for creating a new playlist */}
        <Route path="/CreatePlaylis" element={<CreatePlaylis />} />

        {/* Route for the album page */}
        <Route path="/album" element={<Album />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
