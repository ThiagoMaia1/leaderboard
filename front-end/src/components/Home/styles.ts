import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    gap: ${theme.grid.gutter};
    padding: ${theme.spacings.large};
  `}
`;
