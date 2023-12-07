import { Route, Routes } from "react-router-dom";
import { HomePage, TopArtists, AddFestivalPage } from "./pages/index.tsx";
import Navbar from "./components/Navbar.tsx";
import LandingPage from "./pages/LandingPage.tsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="top-artists" element={<TopArtists />} />
        <Route path="add-festival" element={<AddFestivalPage />} />
        <Route index path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
