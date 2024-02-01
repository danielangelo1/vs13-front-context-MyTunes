import styled from "styled-components";

export const PlaylistPageContainer = styled.div`
  padding: 20px;
`;

export const PlaylistHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const PlaylistItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const PlaylistButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 10px 25px;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 4px;

  &:hover {
    background-color: #c0392b;
  }
`;

export const ClearPlaylistButton = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 4px;
  margin-top: 2rem;
  width: 100%;

  &:hover {
    background-color: #2980b9;
  }
`;
