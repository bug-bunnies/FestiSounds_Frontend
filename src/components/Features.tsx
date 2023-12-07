import {
  featuresArtistsImg,
  featuresFestivalImg,
  featuresPlaylistImg,
} from "../assets/features";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="grid p-3 grid-cols-2 gap-4 bg-spotify-green items-center ">
      <div className="grid gap-4 align-middle">
        <FeatureCard
          imgUrl={featuresArtistsImg}
          title={"Explore New Artists"}
          description={
            "Explore the artists that we know you'll love, before you find them. Our app will recommend new and exciting artists for you based on you listening habits."
          }
        />
      </div>
      <div className="grid gap-4">
        <FeatureCard
          imgUrl={featuresFestivalImg}
          title={"Find New Festivals"}
          description={
            "Match yourself to the coolest and most exciting events."
          }
        />
        <FeatureCard
          imgUrl={featuresPlaylistImg}
          title={"Create Personal Playlists"}
          description={
            "Take your listening on the go and be prepared for the gig."
          }
        />
      </div>
    </div>
  );
};

export default Features;
