import styled from "styled-components";

export const StatusStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StatusMessageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 42px;
  text-align: center;
  gap: 10px;
  span {
    font-size: 22px;
    text-align: center;
    font-weight: normal;
  }
`;
