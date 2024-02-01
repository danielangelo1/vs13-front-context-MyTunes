import ArtistsCards from "../../components/artistsCard/ArtistsCards";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MainContent from "../../components/mainContent/MainContent";

const Artists = () => {
  return (
    <>
      <Header />
      <MainContent>
        <h1>Artistas em alta</h1>
        <p>
          Aqui você encontra os artistas que estão emplacando hits atrás de
          hits!
        </p>
        <ArtistsCards />
      </MainContent>
      <Footer />
    </>
  );
};

export default Artists;
