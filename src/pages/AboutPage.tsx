import { festisoundsLogo } from "../../public/assets/logo";
import CallToAction from "../components/LandingPage/CallToAction";

const AboutPage = () => {
  return (
    <div>
      <div className="bg-spotify-black p-3">
        <img
          className="h-auto max-w-xs mx-auto"
          src={festisoundsLogo}
          alt="FestiSounds Logo"
        />
        <h1 className="p-5 text-center text-3xl font-extrabold leading-none tracking-tight text-spotify-white md:text-5xl lg:text-6xl">
          We want to enhance your festival experience and help upcoming artists.
        </h1>
        
        <div className="mb-6 px-5 text-lg font-normal text-spotify-light-grey sm:px-16 lg:text-xl xl:px-48">
        <hr className="my-8 h-px bg-spotify-grey"></hr>
          
          <p>Thats it...</p>
          <br />
          <p>
            <span className="text-spotify-green"> FestiSounds</span> is more
            than just an app. It's a bridge that connects you to the world of
            undiscovered music, one festival at a time.
          </p>
          <br />
          <p className="divide-y divide-current">
            We believe that every artist, no matter how small or unheard,
            carries a unique sound that deserves to be shared and celebrated.
            And we believe that every music lover, like you, should have the
            chance to experience the thrill of discovering your new favorite
            artist.
          </p>
          <br />
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
          <br />
          <p>
            <span className="text-spotify-green"> FestiSounds</span> is your
            ticket to a world of music waiting to be explored. Let's set out on
            this journey together, one festival at a time.
          </p>
          <hr className="my-8 h-px bg-spotify-grey"></hr>
        </div>
        <h2 className="p-5 text-center text-2xl font-extrabold leading-none tracking-tight text-spotify-white">
          Please note that this app is still under construction and will be
          updated regularly. Check our github for detailed updates!
        </h2>
      </div>
      <CallToAction />
    </div>
  );
};

export default AboutPage;
