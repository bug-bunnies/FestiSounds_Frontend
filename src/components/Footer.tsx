import { festisoundsLogo } from "../../public/assets/logo";


const Footer = () => {

  const festisoundsLink: string = "https://festisounds.vercel.app";

  return (
    <footer className="bg-spotify-black shadow">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href={festisoundsLink}
            className="mb-4 flex items-center space-x-3 rtl:space-x-reverse sm:mb-0"
          >
            <img
              src={festisoundsLogo}
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold text-spotify-white">
              FestiSounds
            </span>
          </a>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-spotify-grey sm:mb-0">
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-spotify-light-grey sm:mx-auto lg:my-8" />
        <span className="block text-sm text-spotify-grey sm:text-center">
          © 2023{" "}
          <a href={festisoundsLink} className="hover:underline">
            FestiSounds™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
