import { Route, Routes } from "react-router-dom";
import { HomePage, TopArtists, AddFestivalPage } from "./pages/index.tsx";
import Navbar from "./components/Navbar.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import Footer from "./components/Footer.tsx";
import { useState } from "react";
import PrivacyPolicyModal from "./modals/PrivacyPolicyModal.tsx";

function App() {

  const [isPrivacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
  const togglePrivacyPolicy = () => {
    setPrivacyPolicyOpen(!isPrivacyPolicyOpen)
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="top-artists" element={<TopArtists />} />
        <Route path="add-festival" element={<AddFestivalPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route index path="/" element={<LandingPage />} />
      </Routes>
      <PrivacyPolicyModal isOpen={isPrivacyPolicyOpen} onClose={togglePrivacyPolicy}/>
      <Footer onOpenPrivacyModal={togglePrivacyPolicy} />
    </div>
  );
}

export default App;
