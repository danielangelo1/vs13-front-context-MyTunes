import { useContext } from "react";
import { HeaderContainer, HeaderContent, NavMenu } from "./styles";
import { PlaylistContext } from "../../context/PlaylistContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { playlist } = useContext(PlaylistContext);
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <h1>MyTunes</h1>
        </Link>
        <NavMenu>
          <Link to="/sobre">Sobre</Link>
          <Link to="/artists">Artistas</Link>
          <Link to="/myPlaylist">♫ {playlist.length}</Link>
        </NavMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
