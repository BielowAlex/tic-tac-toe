import styled from "styled-components";

export const CellStyled = styled.li<{ $isSelected: boolean }>`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5em;
  border: 2px solid white;
  border-radius: 30px;
  cursor: pointer;
  font-weight: lighter;
  opacity: ${(props) => (props.$isSelected ? 0.2 : 1)};
`;
