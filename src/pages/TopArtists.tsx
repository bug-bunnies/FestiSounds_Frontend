import { useEffect, useState } from "react";

export function TopArtists() {

    const [userTopArtists, setUserTopArtists] = useState<string[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/spotify/user-top-artists")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setUserTopArtists(data)
            })
    }, [])

    return (
        <div>
            {userTopArtists ? (
                userTopArtists.map((artistResult: any) => {
                    return <>
                        <h1 key= {artistResult.name}>{artistResult.name}</h1>
                        <p> {artistResult.genres} </p>
                    </>
                })
            ):
            (
                <h1>LOADING...</h1>
            )}
        </div>
    );
}