import CallToAction from "../components/LandingPage/CallToAction";
import Features from "../components/LandingPage/Features";
import Hero from "../components/LandingPage/Hero";

const LandingPage = () => {

    return (
        <main className="relative bg-hero-black">
            
            <section>
                <Hero />
            </section>

            <section>
                <Features />
            </section>

            <section className="bg-spotify-black">
                <CallToAction />
            </section>
        </main>
    );
};

export default LandingPage;