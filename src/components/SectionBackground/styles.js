import Styled, { css } from 'styled-components';

const containerBackground = (theme) =>
  css`
    background: ${theme.color.background.black};
    color: ${theme.color.heading.white};
  `;

export const Container = Styled.div`
${({ theme, background }) => css`
  background: ${theme.color.background.white};
  color: ${theme.color.heading.black};
  transition: background 300ms ease-in;
  ${background && containerBackground(theme)};
  min-height: 100vh;
  align-items: center;
`}`;
