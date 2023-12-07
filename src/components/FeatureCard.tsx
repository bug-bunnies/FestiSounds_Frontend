import { FeatureCardType } from "../types/FestivalCardType";

const FeatureCard = ({ imgUrl, title, description }: FeatureCardType) => {
  return (
    <div className="max-w-sm rounded-lg border-2 border-spotify-black bg-spotify-dark-grey shadow h-fit ">
      <a href="#">
        <img className="rounded-t-lg" src={imgUrl} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-spotify-white ">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-spotify-light-grey ">
          {description}
        </p>
        <a
          href="#"
          className="inline-flex items-center rounded-lg bg-spotify-green px-3 py-2 text-center text-sm font-medium text-spotify-dark-grey hover:text-spotify-green hover:ring-1 hover:ring-spotify-green hover:bg-transparent focus:ring-4 focus:ring-spotify-green"
        >
          Read more
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
  );
};

export default FeatureCard;
