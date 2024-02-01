import { createContext, useState } from "react";
import { TracksProps } from "../components/trackCards/TrackCards";

export const PlaylistContext = createContext<{
  playlist: TracksProps[];
  setPlaylist: (playlist: TracksProps[]) => void;
}>({
  playlist: [],
  setPlaylist: () => {},
});

export const PlaylistProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [playlist, setPlaylist] = useState<TracksProps[]>([]);

  return (
    <PlaylistContext.Provider value={{ playlist, setPlaylist }}>
      {children}
    </PlaylistContext.Provider>
  );
};
