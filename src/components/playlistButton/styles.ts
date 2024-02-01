import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #a200fa;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  margin-top: 1rem;
  &:hover {
    background-color: #7d00c1;
  }

  @media (max-width: 768px) {
    padding: 5px 10px;
  }
`;

export const HeartIcon = styled.span`
  color: white;
`;
