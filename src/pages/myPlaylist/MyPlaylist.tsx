import { useContext } from "react";
import { PlaylistContext } from "../../context/PlaylistContext";
import Header from "../../components/header/Header";
import {
  ClearPlaylistButton,
  PlaylistButton,
  PlaylistHeader,
  PlaylistItem,
  PlaylistPageContainer,
} from "./styles";
import { TracksProps } from "../../components/trackCards/TrackCards";

const MyPlaylist = () => {
  const { playlist, setPlaylist } = useContext(PlaylistContext);

  const handleDeletetrack = (trackToDelete: TracksProps) => {
    const newPlaylist = playlist.filter(
      (track) => track.name !== trackToDelete.name,
    );
    setPlaylist(newPlaylist);
  };

  const handleClearPlaylist = () => {
    setPlaylist([]);
  };

  return (
    <>
      <Header />
      <PlaylistPageContainer>
        <PlaylistHeader>Minha Playlist</PlaylistHeader>
        <ul>
          {playlist.map((track, index) => (
            <PlaylistItem key={index}>
              ♫ {track.name} - {track.artist.name}
              <PlaylistButton onClick={() => handleDeletetrack(track)}>
                Deletar
              </PlaylistButton>
            </PlaylistItem>
          ))}
        </ul>
        {(playlist.length > 0 && (
          <ClearPlaylistButton onClick={handleClearPlaylist}>
            Limpar Playlist
          </ClearPlaylistButton>
        )) ||
          "Sua playlist está vazia. Adicione músicas! "}
      </PlaylistPageContainer>
    </>
  );
};

export default MyPlaylist;
