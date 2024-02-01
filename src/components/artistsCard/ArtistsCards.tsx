import { useEffect, useState } from "react";
import { ArtistCard, ArtistContainer } from "./styles";

interface ArtistProps {
  name: string;
  playcount: string;
  listeners: string;
}

const getAllTopArtists = async () => {
  try {
    const response = await fetch(
      "https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=e713e4ee81e3cfee0417956233a9faa1&format=json",
    );
    const data = await response.json();
    return data.artists.artist;
  } catch (error) {
    console.error("Error na requisição", error);
  }
};

const ArtistsCards = () => {
  const [artists, setArtists] = useState<ArtistProps[]>([]);

  useEffect(() => {
    const fetchArtists = async () => {
      const fetchedArtists = await getAllTopArtists();
      if (fetchedArtists) {
        setArtists(fetchedArtists);
      }
    };
    fetchArtists();
  }, []);
  return (
    <>
      <ArtistContainer>
        {artists.map((artist, index) => (
          <ArtistCard key={index}>
            <span>{index + 1}</span>
            <h1>{artist.name}</h1>
            <p>Playcount: {artist.playcount}</p>
            <p>Listeners: {artist.listeners}</p>
          </ArtistCard>
        ))}
      </ArtistContainer>
    </>
  );
};

export default ArtistsCards;
