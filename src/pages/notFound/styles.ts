import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  img {
    width: 100%;
    max-width: 100px;
  }
`;

export const NotFoundTitle = styled.h1`
  font-size: 36px;
  color: #e74c3c;
  margin-bottom: 20px;
`;

export const NotFoundText = styled.p`
  font-size: 18px;
  color: whitesmoke;
`;

export const NotFoundLink = styled.a`
  background-color: #a200fa;
  color: white;
  padding: 10px 25px;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  margin-top: 20px;
  text-transform: uppercase;
  transition: background-color 0.3s;
  &:hover {
    background-color: #7d00c1;
  }
`;
