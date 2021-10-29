import styled, { css } from 'styled-components';

export const gridStyle = css`
  display: grid;
  grid-template-columns: 25vw 25vw;
  column-gap: 1.5em;
  row-gap: 0.5em;
  padding: 0 1em;
`;

export const ListContainer = styled.div`
  ${gridStyle}
  max-height: 55vh;
  overflow-y: auto;
  margin-bottom: 3vh;
  h2 {
    text-align: center;
    grid-column: span 2;
    margin-bottom: 10vh;
  }
`;

export const Header = styled.div`
  ${gridStyle}
  padding: 0 1em;
`;

export const HeaderCell = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    font-weight: bold;
    color: white;
    font-size: 120%;
    position: relative;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 100%;
  top: 2px;
  margin-left: 1em;
`;
