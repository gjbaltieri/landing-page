import Styled, { css } from 'styled-components';

export const Container = Styled.div`
${({ theme }) => css`
  width: 100%;
`}`;

export const ImageContainer = Styled.div`
${({ theme }) => css`
  transition: all 200ms ease-in-out;
  display: grid;
  grid-row: auto;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.padding.base};
`}`;

export const ImageElement = Styled.div`
${({ theme, modal }) => css`
  overflow: hidden;
  height: 300px;
`}`;

export const Image = Styled.img`
${({ theme, modal }) => css`
  transition: all 200ms ease-in-out;
  width: 100%;
  height: 100%;
  background: yellow;
  object-fit: cover;
  &:hover {
    transform: scale(1.2);
  }
`}`;
