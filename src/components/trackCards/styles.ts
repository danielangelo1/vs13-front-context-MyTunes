import styled from "styled-components";

export const TrackContent = styled.div`
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

export const TrackContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  &:hover {
    border: 1px solid #a200fa;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const TrackName = styled.h3`
  color: #a200fa;
  margin: 0 0 10px 0;
  text-align: center;
  font-weight: 700;
`;

export const ArtistName = styled.p`
  color: #ccc;
  margin: 0;
  text-align: center;
`;

export const TrackImage = styled.img`
  border-radius: 5px;
  width: 100%;
  object-fit: cover;
`;
