const CallToAction = () => {

  const getSpotifyUserLogin = () => {
    alert("This feature is currently disabled.")
    // fetch("http://localhost:8080/api/login")
    //   .then((response) => response.text())
    //   .then((response) => {
    //     window.location.replace(response);
    //   });
    }

    return (
        <div className="relative flex justify-center p-6 bg bg-transparent">
            <a
            href="#"
            onClick={getSpotifyUserLogin}
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
    );
};

export default CallToAction;