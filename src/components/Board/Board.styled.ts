import styled from "styled-components";

export const BoardStyled = styled.ul<{ $disabled: boolean }>`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 5px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  // cursor: ${(props) => (props.$disabled ? "default" : "pointer")};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  li {
    cursor: ${(props) => (props.$disabled ? "default" : "pointer")} !important;
  }
`;
