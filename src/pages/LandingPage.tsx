import CallToAction from "../components/LandingPage/CallToAction";
import Features from "../components/LandingPage/Features";
import Hero from "../components/LandingPage/Hero";

const LandingPage = () => {

    // const getSpotifyUserLogin = () => {
    //     fetch("http://localhost:8080/api/login")
    //       .then((response) => response.text())
    //       .then((response) => {
    //         window.location.replace(response);
    //       });
    //     }

    return (
        <main className="relative bg-hero-black">
            
            <section>
                <Hero />
            </section>

            <section>
                <Features />
            </section>

            <section>
                <CallToAction />
            </section>
        </main>
    );
};

export default LandingPage;