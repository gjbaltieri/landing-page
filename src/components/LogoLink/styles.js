import Styled, { css } from 'styled-components';
export const Container = Styled.a`
${({ theme }) => css`
  display: flex;
  font-size: ${theme.font.size.medium};
  text-decoration: none;
  color: inherit;
  > img {
    max-height: 2rem;
  }
`}`;
