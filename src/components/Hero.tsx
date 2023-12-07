import { heroBackgroundImg } from "../../public/assets/hero";

const Hero = () => {
  return (
    <section className="relative bg-spotify-black bg-opacity-50 bg-center bg-no-repeat bg-blend-multiply before:absolute before:inset-0 before:bg-gradient-to-t to-10% from-spotify-black" style={{ backgroundImage: `url(${heroBackgroundImg})` }}>
      <div className="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56">
        <h1 className="mb-4 px-1 text-4xl font-extrabold leading-none tracking-tight text-spotify-white md:text-5xl lg:text-6xl">
        Discover your <span className="text-spotify-green">favourite <br/> festival</span> sounds
        </h1>
        <p className="mb-8 text-lg font-normal text-spotify-light-grey sm:px-16 lg:px-48 lg:text-xl">
          Want to get the most out of your next festival? Find new and exciting music tailored especially for you.
        </p>
        <div className="relative flex justify-center">
            <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-spotify-green px-5 py-3 text-center text-base font-medium text-spotify-white hover:text-spotify-green hover:ring-1 hover:ring-spotify-green hover:bg-transparent focus:ring-4 focus:ring-spotify-green"
          >
            Connect with Spotify
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
