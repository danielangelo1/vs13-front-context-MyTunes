import { ToastContainer } from "react-toastify";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MainContent from "../../components/mainContent/MainContent";
import TrackCards from "../../components/trackCards/TrackCards";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <MainContent>
        <h1>Músicas em alta!</h1>
        <p>
          Aqui você encontra as músicas mais ouvidas do momento. Adicione à sua
          playlist!
        </p>
        <TrackCards />
      </MainContent>
      <Footer />
    </>
  );
};

export default Home;
