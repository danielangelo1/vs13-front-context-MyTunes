import { useEffect, useState } from "react";

import {
  ArtistName,
  TrackContainer,
  TrackContent,
  TrackImage,
  TrackName,
} from "./styles";
import PlaylistButton from "../playlistButton/PlaylistButton";

export interface TracksProps {
  name: string;
  url: string;
  image: Array<{
    "#text": string;
    size: string;
  }>;
  artist: {
    name: string;
  };
}

const getPopularTracks = async () => {
  try {
    const response = await fetch(
      "https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=e713e4ee81e3cfee0417956233a9faa1&format=json",
    );
    const data = await response.json();
    return data.tracks.track;
  } catch (error) {
    console.error("Error na requisição", error);
  }
};

const TrackCards = () => {
  const [tracks, setTracks] = useState<TracksProps[]>([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const fetchedTracks = await getPopularTracks();
      if (fetchedTracks) {
        setTracks(fetchedTracks);
      }
    };

    fetchTracks();
  }, []);

  return (
    <>
      <TrackContent>
        {tracks.map((track, index) => (
          <TrackContainer key={index}>
            <TrackName>{track.name}</TrackName>
            <ArtistName>{track.artist.name}</ArtistName>
            <TrackImage
              src={track.image.find((img) => img.size === "medium")?.["#text"]}
              alt={`${track.name} cover`}
            />
            <PlaylistButton track={track} />
          </TrackContainer>
        ))}
      </TrackContent>
    </>
  );
};

export default TrackCards;
