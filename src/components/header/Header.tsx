import { useContext } from "react";
import { HeaderContainer, HeaderContent, NavMenu } from "./styles";
import { PlaylistContext } from "../../context/PlaylistContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { playlist } = useContext(PlaylistContext);
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>MyTunes</h1>
        <NavMenu>
          <Link to="/">Home</Link>
          <Link to="/myPlaylist">♫ {playlist.length}</Link>
        </NavMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
