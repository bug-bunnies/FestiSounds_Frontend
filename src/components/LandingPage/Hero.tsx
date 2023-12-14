import { heroBackgroundImg } from "../../../public/assets/hero";
import CallToAction from "./CallToAction";

const Hero = () => {

  return (
    <section className="relative bg-hero-black bg-opacity-50 bg-center bg-no-repeat bg-blend-multiply before:absolute before:inset-0 before:bg-gradient-to-t to-10% from-spotify-black" style={{ backgroundImage: `url(${heroBackgroundImg})` }}>
      <div className="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56">
        <h1 className="mb-4 px-1 text-4xl font-extrabold leading-none tracking-tight text-spotify-white md:text-5xl lg:text-6xl">
        Discover your <span className="text-spotify-green">favourite <br/> festival</span> sounds
        </h1>
        <p className="mb-8 text-lg font-normal text-spotify-light-grey sm:px-16 lg:px-48 lg:text-xl">
          Want to get the most out of your next festival? Find new and exciting music tailored especially for you.
        </p>
        <CallToAction />
      </div>
    </section>
  );
};

export default Hero;
