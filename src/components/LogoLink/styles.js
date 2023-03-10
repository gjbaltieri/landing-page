import Styled, { css } from 'styled-components';
export const Container = Styled.a`
${({ theme }) => css`
  display: flex;
  font-size: ${theme.font.size.base};
  text-decoration: none;
  color: inherit;
  > img {
    max-height: 2rem;
  }
`}`;
