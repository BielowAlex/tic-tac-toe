import styled from "styled-components";

export const ButtonStyled = styled.button`
  background: inherit;
  border: 2px solid white;
  color: white;
  padding: 5px 20px;
  border-radius: 20px;
  font-weight: bolder;
  cursor: pointer;
  font-size: 22px;
  transition: all linear 0.2s;

  &:hover {
    opacity: 0.5;
  }
`;
