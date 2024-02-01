import React from "react";
import { MainContentContainer } from "./styles";

export interface MainContentProps {
  children: React.ReactNode;
}

const MainContent = ({ children }: MainContentProps) => {
  return <MainContentContainer>{children}</MainContentContainer>;
};

export default MainContent;
