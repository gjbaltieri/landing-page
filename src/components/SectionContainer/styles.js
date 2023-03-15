import Styled, { css } from 'styled-components';
export const Container = Styled.div`
${({ theme }) => css`
  max-width: 120rem;
  margin: 0 auto;
  padding: ${theme.padding.medium};
  width: 100%;
`}`;
