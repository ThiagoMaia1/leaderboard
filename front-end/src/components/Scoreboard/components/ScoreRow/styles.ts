import styled from 'styled-components';

export const Cell = styled.div<{ isOdd?: boolean }>`
  background-color: ${({ isOdd }) => (isOdd ? '#eeb902' : '#ffcc52')};
  padding: 0.7em 1em;
  border-radius: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    overflow-wrap: anywhere;
  }
`;
