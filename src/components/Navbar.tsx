import { useState } from "react";
import { Link } from "react-router-dom";
import { festisoundsLogo } from "../../public/assets/logo";

const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

    return (
      <nav className="bg-spotify-black font-montserrat">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={festisoundsLogo}
              className="h-8"
              alt="FestiSounds Logo"
            />
          </a>
          <button
            id="hamburger-menu"
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-spotify-grey hover:bg-spotify-light-grey focus:outline-none focus:ring-2 focus:ring-spotify-grey md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={`${isNavOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}  id="navbar-default">
            <ul className="mt-4 flex flex-col rounded-lg border border-spotify-grey bg-spotify-grey p-4 font-medium rtl:space-x-revers3 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-spotify-black md:p-0">
              <li>
                <a
                  href="/"
                  className="block rounded bg-spotify-green px-3 py-2 text-white md:bg-transparent md:p-0 md:text-spotify-green"
                  aria-current="page"
                >
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li>
                <a
                  className="block rounded px-3 py-2 text-spotify-white hover:bg-spotify-light-grey md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-spotify-green"
                >
                  <Link to="/about">About</Link>
                </a>
              </li>
              <li>
                <a
                  className="block rounded px-3 py-2 text-spotify-white hover:bg-spotify-light-grey md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-spotify-green"
                >
                  <Link to="#">Features</Link>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded px-3 py-2 text-spotify-white hover:bg-spotify-light-grey md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-spotify-green"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;