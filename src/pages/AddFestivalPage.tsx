import {DateValueType} from "react-tailwindcss-datepicker";
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {FestivalForm} from "../components/AddFestivalPage/FestivalForm.tsx";
import {DateSelector} from "../components/AddFestivalPage/DateSelector.tsx";
// import {PhotoUploader} from "../Components/AddFestival/PhotoUploader.tsx";
import {ArtistInput} from "../components/AddFestivalPage/ArtistInput.tsx";
import {SpotifyArtistDetails} from "../types/SpotifyArtistDetailsType.tsx";
import {useForm} from "react-hook-form";

// const testData = {
//     "name": "Fest6",
//     "startDate": "2023-09-26",
//     "endDate": "2023-09-28",
//     "details": "Details for Fest6",
//     "city": "City6",
//     "country": "Country6",
//     "is_robbie_invited": true,
//     "image": "https://example.com/image5.jpg",
//     "organizer": "Organizer6",
//     "website": "https://fest6.com"
// }


export function AddFestivalPage() {
    // USESTATE HOOKS
    const [festivalDates, setFestivalDates] = useState<DateValueType>({
        startDate: new Date(),
        endDate: new Date(new Date().setMonth(11)),
    });
    const [artists, setArtists] = useState<SpotifyArtistDetails[]>([]);
    const [spotifyAccessToken, setSpotifyAccessToken] = useState<string>("BQBq7CRhCtjcVv5E_S29NQpMpfIF94FWJGpCAqCBLH2p4b1jAG7WlpSH7lB_S-6zc_xFOBzCr5xQ4EC-gszzWdeSdRn3J5seYhygwiH-aNA_nnTeavwOXaizhS9YljfytbhkGlqoLdtN4qIf5YuLmzxYPcBWO6rwGFHx4Ck3ZSapWe2np4FB2_4csP0-Hlo2PSDyBBM");
    const [searchResults, setSearchResults] = useState<SpotifyArtistDetails[]>([])

    // OTHER HOOKS
    const artistInputRef = useRef<HTMLInputElement>(null);
    const {register, handleSubmit} = useForm();

    const BACKEND_URL: string = "http://localhost:8080"
    const BASE_SPOTIFY_SEARCH_URL: string = "https://api.spotify.com/v1/search?q="
    const APIKEY: string = "BQDWzqNZnhNqGqLoaz3HMBk4bCo_7YsrzeDbJB6TqgFkHlUpUFpDNryT-UcqqhjVwGledPVDBopTIB7GfTxjo0ylUnSKkmozmSdldvztIyLZovbg1Gh9XwZc_vwh0o0rM73x0Rac2SkqWUbzkfRO_s94jMnL6_ItA2VeIBuvJYT7ryulUm_01qSG4B1MH9niM6nPemE"


    const onSubmit = async (data: any) => {
        // console.log("Data:", data)
        const startDate = festivalDates?.startDate;
        const endDate = festivalDates?.endDate;
        const formData = {...data, artists, startDate, endDate};
        console.log("Form data:", formData);
        const response = await axios.post(`${BACKEND_URL}/api/festivals`, formData
            , {
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json',
                    'apikey': APIKEY,
                }
            }
        );
        console.log("Response:", response.data);
    };

    const getAccessToken = async () => {
        setSpotifyAccessToken((await axios.get(BACKEND_URL + "/api/refresh")).data);
        console.log(spotifyAccessToken);
    }

    const resetTokenTimes = () => {
        setInterval(getAccessToken, 3599000)
    }

    useEffect(() => {
        console.log("Here")
        resetTokenTimes();
    }, [])


    const handleValueChange = (
        newValue: DateValueType,
    ) => {
        console.log("newValue:", newValue);
        setFestivalDates(newValue);
    };

    const deleteArtistFromFestival = (e: React.MouseEvent<HTMLLIElement>) => {
        e.preventDefault();
        const clickedElement = e.currentTarget as HTMLLIElement;
        setArtists(artists.filter((artist) => artist.name !== clickedElement.textContent));
    }

    const searchArtists = async () => {
        const searchArtistInput: string = artistInputRef.current!.value;
        const config = {
            headers: {
                "Authorization": `Bearer ${spotifyAccessToken}`
            }
        }
        const requestToSpotify = await axios.get(`${BASE_SPOTIFY_SEARCH_URL}${searchArtistInput}&type=artist&limit=5`, config)
        const results = requestToSpotify.data.artists.items.map((artist: SpotifyArtistDetails) => ({
            id: artist.id,
            name: artist.name
        }));
        setSearchResults(results);
        console.log(searchResults)
    }

    return (
        <>
            <main className="mt-6 grid justify-center">
                <h1>Test element for spacing indication</h1>

                <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>

                    <FestivalForm register={register}/>
                    <DateSelector festivalDates={festivalDates} onChange={handleValueChange}
                                  register={register}/>
                    {/*<PhotoUploader register={register}/>*/}
                    <ArtistInput
                        register={register}
                        artistInputRef={artistInputRef}
                        searchArtists={searchArtists}
                        searchResults={searchResults}
                        artists={artists}
                        deleteArtistFromFestival={deleteArtistFromFestival}
                        setArtists={setArtists}
                    />

                    <button className="mb-8 mt-4">Submit festival</button>

                </form>

            </main>
        </>
    )
}