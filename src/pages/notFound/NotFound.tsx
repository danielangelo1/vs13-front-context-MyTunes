import {
  NotFoundContainer,
  NotFoundLink,
  NotFoundText,
  NotFoundTitle,
} from "./styles";

import logo from "/favicon.svg";

const NotFound = () => {
  return (
    <>
      <NotFoundContainer>
        <img src={logo} alt="Logo da MyTunes" />
        <NotFoundTitle>Página não encontrada</NotFoundTitle>
        <NotFoundText>
          A página que você está procurando não existe.
        </NotFoundText>
        <NotFoundText>Por favor, verifique a URL ou volte para a </NotFoundText>
        <NotFoundLink href="/">página inicial</NotFoundLink>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;
