import styled, { css } from 'styled-components';

export const gridStyle = css`
  display: grid;
  grid-template-columns: 300px 300px;
  column-gap: 1.5em;
  row-gap: 0.5em;
`;

export const Wrapper = styled.div`
  ${gridStyle}
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
