import styled, { css } from 'styled-components';

const containerBackground = (theme) =>
  css`
    background: ${theme.color.background.black};
    color: ${theme.color.heading.white};
  `;

export const Container = styled.div`
  ${({ theme, background }) => css`
    transition: background 300ms ease-in-out;
    background: ${theme.color.background.white};
    color: ${theme.color.black};
    min-height: 100vh;
    width: 100%;
    ${background && containerBackground(theme)};
  `}
`;
