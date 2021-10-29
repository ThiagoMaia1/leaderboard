import { gridStyle } from 'components/Scoreboard/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-right: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Grid = styled.div`
  ${gridStyle}
  input {
    width: 100%;
    font-size: 16px;
  }
`;

export const H3 = styled.h3`
  margin-left: 2em;
`;

export const ButtonContainer = styled.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
`;

export const LoadingContainer = styled.div`
  position: absolute;
  right: 25%;
`;

export const Button = styled.button`
  background: white;
  font-size: 120%;
  margin: 1em auto;
  padding: 0.5em 2em;
  border-radius: 5px;
  &:hover {
    background-color: #eee;
  }
`;
