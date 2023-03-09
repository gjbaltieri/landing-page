import Styled, { css } from 'styled-components';
export const Container = Styled.nav`
${({ theme }) => css`
  display: flex;
  flex-flow: row wrap;
  @media ${theme.media.maxWidth768px} {
    flex-flow: column wrap;
    align-items: center;
  } ;
`}`;
