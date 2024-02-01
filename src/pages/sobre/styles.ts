import styled from "styled-components";

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;

  h1 {
    font-size: 2.5rem;
    color: #a200fa;
  }

  p {
    font-size: 1.5rem;
    color: white;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;
