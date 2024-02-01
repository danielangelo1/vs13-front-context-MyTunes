import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/notFound/NotFound";
import Home from "../pages/home/Home";
import MyPlaylist from "../pages/myPlaylist/MyPlaylist";
import Artists from "../pages/artist/Artists";
import Sobre from "../pages/sobre/Sobre";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myPlaylist" element={<MyPlaylist />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
