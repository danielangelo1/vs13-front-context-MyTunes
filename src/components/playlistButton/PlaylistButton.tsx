import { useContext } from "react";
import { PlaylistContext } from "../../context/PlaylistContext";
import { TracksProps } from "../trackCards/TrackCards";
import { HeartIcon, StyledButton } from "./styles";
import { toast } from "react-toastify";

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
      toast.success("Música adicionada à playlist", {
        autoClose: 500,
      });
    } else {
      toast.error("Essa música já está na sua playlist", {
        autoClose: 500,
      });
    }
  };

  return (
    <>
      <StyledButton onClick={handleAddToPlaylist}>
        <HeartIcon>❤️</HeartIcon>
        Adicionar à playlist
      </StyledButton>
    </>
  );
};

export default PlaylistButton;
