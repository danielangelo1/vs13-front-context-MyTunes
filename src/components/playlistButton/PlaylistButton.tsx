import { useContext } from "react";
import { PlaylistContext } from "../../context/PlaylistContext";
import { TracksProps } from "../trackCards/TrackCards";
import { HeartIcon, StyledButton } from "./styles";

interface AddToPlaylistButtonProps {
  track: TracksProps;
}

const PlaylistButton = ({ track }: AddToPlaylistButtonProps) => {
  const { playlist, setPlaylist } = useContext(PlaylistContext);

  const handleAddToPlaylist = () => {
    const isTrackInPlaylist = playlist.some(
      (playlistTrack) => playlistTrack.name === track.name,
    );

    if (!isTrackInPlaylist) {
      setPlaylist([...playlist, track]);
    } else {
      alert("A música já está na sua playlist");
    }
  };

  return (
    <StyledButton onClick={handleAddToPlaylist}>
      <HeartIcon>❤️</HeartIcon>
      Adicionar à playlist
    </StyledButton>
  );
};

export default PlaylistButton;
