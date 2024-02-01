import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MainContent from "../../components/mainContent/MainContent";
import { AboutContent } from "./styles";

const Sobre = () => {
  return (
    <>
      <Header />
      <MainContent>
        <AboutContent>
          <h1>Sobre</h1>
          <p>
            O MyTunes é uma aplicação que consome a API do Last.fm para exibir
            informações sobre artistas e músicas.
          </p>

          <p>
            É possível visualizar os artistas e músicas mais ouvidos no momento,
            além de criar uma playlist com suas músicas favoritas.
          </p>

          <p>
            O projeto foi desenvolvido com o intuito de praticar os conceitos
            aprendidos durante o Vem Ser, como Contexto API, consumo de API,
            styled-components e manipulação de estado.
          </p>
        </AboutContent>
      </MainContent>
      <Footer />
    </>
  );
};

export default Sobre;
