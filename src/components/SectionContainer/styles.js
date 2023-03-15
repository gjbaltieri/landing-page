import Styled, { css } from 'styled-components';
export const Container = Styled.div`
${({ theme }) => css`
  max-width: 120rem;
  padding: ${theme.padding.medium};
  width: 100%;
  margin: 0 auto;
`}`;
