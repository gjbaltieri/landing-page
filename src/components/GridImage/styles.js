import Styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = Styled.div`
${({ theme }) => css`
  width: 100%;
  div {
    ${TextComponent} {
      padding: ${theme.padding.base} 0;
    }
  }
`}`;

export const ImageContainer = Styled.div`
${({ theme }) => css`
  transition: all 200ms ease-in-out;
  display: grid;
  grid-row: auto;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${theme.padding.base};
`}`;

export const ImageElement = Styled.div`
${({ theme, modal }) => css`
  overflow: hidden;
  width: 300px;
  height: 300px;
  margin: 0 auto;
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
