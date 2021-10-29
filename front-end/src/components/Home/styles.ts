import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${theme.grid.gutter};
    padding: ${theme.spacings.large};
    x > svg {
      height: auto;
      width: 70px;
    }

    > div {
      > h1 {
        font-size: ${theme.font.sizes.huge};
        margin: 0;
      }

      > a {
        color: ${theme.colors.disable};
        font-weight: ${theme.font.regular};
      }
    }
  `}
`;
