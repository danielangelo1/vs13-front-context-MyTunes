import styled from "styled-components";

export const ArtistContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    padding: 1rem;
  }
`;

export const ArtistCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 24px;
    color: #a200fa;
    margin: 10px 0;
  }

  p {
    font-size: 16px;
    color: white;
    margin: 5px 0;
  }
`;
