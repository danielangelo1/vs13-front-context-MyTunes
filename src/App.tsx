import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./router/Router";
import { PlaylistProvider } from "./context/PlaylistContext";

function App() {
  return (
    <>
      <PlaylistProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PlaylistProvider>
    </>
  );
}

export default App;
