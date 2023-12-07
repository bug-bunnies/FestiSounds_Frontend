import { useState } from "react"

export function HomePage() {

    const [userTopArtists, setUserTopArtists] = useState();
    const [userTopGenres, setUserTopGenres] = useState();

    const getTopArtists = () => {
        fetch("http://localhost:8080/api/spotify/user-top-artists")
            .then((response) => response.json())
            .then(data => setUserTopArtists(data))
      }

    const getTopGenres = () => {
        fetch("http://localhost:8080/api/spotify/get-genres")
            .then((response) => response.json())
            .then(data => setUserTopGenres(data))
    }

    return ( 
        <>
            <div className="flex justify-center space-x-10 p-5">
            <button onClick={getTopArtists} className="w-fit transform rounded-full bg-spotify_green px-4 py-2 text-xl font-semibold text-white transition duration-300 ease-in-out hover:scale-110">Get top artists</button>
            <button onClick={getTopGenres} className="w-fit transform rounded-full bg-spotify_green px-4 py-2 text-xl font-semibold text-white transition duration-300 ease-in-out hover:scale-110">Get top genres</button>
            </div>
            <p>{JSON.stringify(userTopArtists)}</p>
            <p>{JSON.stringify(userTopGenres)}</p>
        </>
    )
}