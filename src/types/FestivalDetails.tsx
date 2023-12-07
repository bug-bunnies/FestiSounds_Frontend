import {SpotifyArtistDetails} from "./SpotifyArtistDetails.tsx";

export type FestivalDetails = {
    name: string,
    startDate: Date,
    endDate: Date,
    details: string,
    city: string,
    country: string,
    is_robbie_invited?: boolean,
    organizer: string,
    website: string,
    image?: string,
    artists: SpotifyArtistDetails[]
};