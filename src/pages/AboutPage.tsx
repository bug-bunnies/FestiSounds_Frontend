import { festisoundsLogo } from "../../public/assets/logo";
import CallToAction from "../components/LandingPage/CallToAction";

const AboutPage = () => {
  return (
    <div>
      <img src={festisoundsLogo} alt="FestiSounds Logo" />
      <div className="bg-spotify-black p-3">
        <h1 className="p-5 text-center text-4xl font-extrabold leading-none tracking-tight text-spotify-white md:text-5xl lg:text-6xl">
          We want to enhance your festival experience and help smaller artists.
        </h1>
        <p className="mb-6 px-5 text-lg font-normal text-spotify-light-grey sm:px-16 lg:text-xl xl:px-48">
          Thats it... <br />
          We at FestiSounds want to help connect upcoming, lesser known and previously
          unlistened to artists with the world, one festival at a time.
        </p>
        <h2 className="p-5 text-center text-2xl font-extrabold leading-none tracking-tight text-spotify-white">
            Please note that this app is still under cinstruction and will be updated regularly. Check our github for detailed updates!
        </h2>
        {/* <a
        href="#"
        className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
      >
        Learn more
        <svg
          className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a> */}
      </div>
      <CallToAction />
    </div>
  );
};

export default AboutPage;
