import { Route, Routes } from "react-router-dom";
import { HomePage, TopArtists, AddFestivalPage } from "./pages/index.tsx";
import Navbar from "./components/Navbar.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import Footer from "./components/Footer.tsx";
import { useState } from "react";
import PrivacyPolicyModal from "./modals/PrivacyPolicyModal.tsx";
import ContactModal from "./modals/ContactModal.tsx";


function App() {

  const [isPrivacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
  const togglePrivacyPolicy = () => {
    setPrivacyPolicyOpen(!isPrivacyPolicyOpen)
  }

  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const toggleContactForm = () => {
    setIsContactFormOpen(!isContactFormOpen)
  }

  return (
    <div className="bg-spotify-black">
      <Navbar />
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="top-artists" element={<TopArtists />} />
        <Route path="add-festival" element={<AddFestivalPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route index path="/" element={<LandingPage />} />
      </Routes>
      <ContactModal isOpen={isContactFormOpen} onClose={toggleContactForm} />
      <PrivacyPolicyModal isOpen={isPrivacyPolicyOpen} onClose={togglePrivacyPolicy}/>
      <Footer onOpenPrivacyModal={togglePrivacyPolicy} onOpenContactModal={toggleContactForm}/>
    </div>
  );
}

export default App;
