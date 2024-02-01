import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/notFound/NotFound";
import Home from "../pages/home/Home";
import MyPlaylist from "../pages/myPlaylist/MyPlaylist";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myPlaylist" element={<MyPlaylist />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
