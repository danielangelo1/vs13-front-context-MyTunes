import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #a200fa;
  padding: 20px 0;
  color: white;
  position: sticky;
  top: 0;

  h1 {
    margin: 0;
    font-size: 2.5rem;
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    &:hover {
      color: #ddd;
    }
  }
`;

export const HeaderContent = styled.div`
  margin-right: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 3rem;
  align-items: center;
`;
