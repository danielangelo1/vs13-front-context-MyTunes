import styled from "styled-components";
import { MainContentProps } from "./MainContent";

export const MainContentContainer = styled.main<MainContentProps>`
  max-width: 1200px;
  flex: 1;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
