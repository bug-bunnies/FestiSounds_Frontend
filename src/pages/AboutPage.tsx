import { festisoundsLogo } from "../../public/assets/logo";
import CallToAction from "../components/LandingPage/CallToAction";

const AboutPage = () => {
  return (
    <div>
      <div className="bg-spotify-black p-3">
      <img src={festisoundsLogo} alt="FestiSounds Logo" />
        <h1 className="p-5 text-center text-3xl font-extrabold leading-none tracking-tight text-spotify-white md:text-5xl lg:text-6xl">
          We want to enhance your festival experience and help upcoming artists.
        </h1>
        <div className="mb-6 px-5 text-lg font-normal text-spotify-light-grey sm:px-16 lg:text-xl xl:px-48">
          <p>Thats it...</p>
          <hr className="my-8 h-px bg-spotify-grey"></hr>
          <br />
          <p>
            <span className="text-spotify-green"> FestiSounds</span> is more
            than just an app. It's a bridge that connects you to the world of
            undiscovered music, one festival at a time.
          </p>
          <hr className="my-8 h-px bg-spotify-grey"></hr>
          <br />
          <p className="divide-y divide-current">
            We believe that every artist, no matter how small or unheard,
            carries a unique sound that deserves to be shared and celebrated.
            And we believe that every music lover, like you, should have the
            chance to experience the thrill of discovering your new favorite
            artist.
          </p>
          <hr className="my-8 h-px bg-spotify-grey"></hr> <br />
          <p>
            That's why we created
            <span className="text-spotify-green"> FestiSounds</span>. Our
            mission is to enhance your festival experience by introducing you to
            up-and-coming artists who are ready to take the stage. Whether
            you're planning your festival itinerary or looking for a new sound
            to accompany your daily routine,
            <span className="text-spotify-green"> FestiSounds</span> is here to
            help you connect with artists that move and inspire you.
          </p>
          <hr className="my-8 h-px bg-spotify-grey"></hr>
          <br />
          <p>
            But
            <span className="text-spotify-green"> FestiSounds</span> isn't just
            about music discovery. It's about supporting artists who are just
            starting to make their mark on the world. When you use
            <span className="text-spotify-green"> FestiSounds</span>, you're not
            just finding new music; you're helping lesser-known artists connect
            with audiences they might not have reached otherwise.
          </p>
          <hr className="my-8 h-px bg-spotify-grey"></hr>
          <br />
          <p>
            <span className="text-spotify-green"> FestiSounds</span> is your
            ticket to a world of music waiting to be explored. Let's set out on
            this journey together, one festival at a time.
          </p>
        </div>
        <h2 className="p-5 text-center text-2xl font-extrabold leading-none tracking-tight text-spotify-white">
          Please note that this app is still under construction and will be
          updated regularly. Check our github for detailed updates!
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
