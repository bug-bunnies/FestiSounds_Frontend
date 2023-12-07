import CallToAction from "../components/CallToAction";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const LandingPage = () => {

    const getSpotifyUserLogin = () => {
        fetch("http://localhost:8080/api/login")
          .then((response) => response.text())
          .then((response) => {
            window.location.replace(response);
          });
        }

    return (
        <main className="relative">
            <section>
                <Navbar />
            </section>

            <section>
                <Hero />
            </section>

            <section>
                <Features />
            </section>

            <section>
                <CallToAction />
            </section>

            <section>
                <Footer />
            </section>
        </main>
    );
};

export default LandingPage;