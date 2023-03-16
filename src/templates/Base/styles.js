import Styled, { css } from 'styled-components';
export const Container = Styled.div`
${({ theme }) => css`
  padding-top: ${theme.padding.xxlarge};
`}`;
