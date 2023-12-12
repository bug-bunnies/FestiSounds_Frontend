import React, { useState } from "react";
import { SpotifyArtistDetails } from "../../types/SpotifyArtistDetailsType.tsx";
import { FieldValues, UseFormRegister } from "react-hook-form";

type ArtistInputProps = {
  register: UseFormRegister<FieldValues>;
  artistInputRef: React.RefObject<HTMLInputElement>;
  searchArtists: () => void;
  searchResults: SpotifyArtistDetails[];
  setArtists: React.Dispatch<React.SetStateAction<SpotifyArtistDetails[]>>;
  artists: SpotifyArtistDetails[];
  deleteArtistFromFestival: (e: React.MouseEvent<HTMLLIElement>) => void;
};

export function ArtistInput({
  register,
  artistInputRef,
  searchArtists,
  searchResults,
  artists,
  deleteArtistFromFestival,
  setArtists,
}: ArtistInputProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputFocus = () => {
    setShowDropdown(true);
  };
  const handleInputBlur = () => {
    setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };
  const handleSelectArtist = (artist: SpotifyArtistDetails) => {
    if (!artists.includes(artist)) {
      setTimeout(() => {
        setArtists([artist, ...artists]);
      }, 200);
    }
    artistInputRef.current!.value = "";
    setShowDropdown(false);
  };

  return (
    <div className="grid w-full px-0">
      <div className="grid w-full px-0">
        <label className="mb-2 mt-8 block text-xs font-bold uppercase tracking-wide text-gray-700">
          Artist Name*
        </label>
        <div className="input-container relative flex">
          <input
            className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            type="text"
            placeholder="Enter artist name's"
            ref={artistInputRef}
            onChange={searchArtists}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          {showDropdown && searchResults.length > 0 && (
            <div className="absolute left-0 z-10 mt-12 w-full border border-gray-300 bg-white shadow-lg">
              <ul>
                <input
                  type="hidden"
                  {...register("artists")}
                  value={JSON.stringify(artists)}
                />
                {searchResults.map((artist) => (
                  <li
                    key={artist.id}
                    className="cursor-pointer p-2 hover:bg-gray-100"
                    onClick={() => handleSelectArtist(artist)}
                  >
                    {artist.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <ul>
          {artists.map((artist) => (
            <li
              key={artist.name}
              className="hover:bg-red-500"
              onClick={deleteArtistFromFestival}
            >
              {artist.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
