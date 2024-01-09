import { Link } from "react-router-dom";
import { festisoundsLogo } from "../../public/assets/logo";
import { FooterType } from "../types/FooterType";

const Footer = (props: FooterType) => {
  const festisoundsLink: string = "https://festisounds.vercel.app";

  return (
    <footer className="bg-spotify-black shadow">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href={festisoundsLink}
            className="mb-4 flex items-center space-x-3 rtl:space-x-reverse sm:mb-0"
          >
            <img src={festisoundsLogo} className="h-8" alt="Flowbite Logo" />
          </a>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-spotify-grey sm:mb-0">
            <li>
              <Link className="me-4 hover:underline md:me-6" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="me-4 hover:underline md:me-6" to="/" onClick={props.onOpenPrivacyModal}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="me-4 hover:underline md:me-6" to="https://github.com/bug-bunnies" target="_blank">
                Github
              </Link>
            </li>
            <li>
              <Link className="me-4 hover:underline md:me-6" to="/" onClick={props.onOpenContactModal}>
                Contact
              </Link>
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
