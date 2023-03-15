import Styled, { css } from 'styled-components';
export const Container = Styled.div`
${({ theme }) => css`
  text-align: center;
  a {
    color: inherit;
    text-decoration: none;
    font-size: ${theme.font.size.base};
    text-align: center;
  }
`}`;
