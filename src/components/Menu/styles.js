import Styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Header/Title';

const MenuClose = (theme) => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = Styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    heigth: 10px;
    z-index: 5;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 300ms ease-in-out;

    > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
      background: ${theme.color.background.black};
      border-bottom: solid ${theme.color.background.black};
    }
    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.maxWidth768px} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      ${visible && MenuClose(theme)};

      > ${SectionContainer} {
        display: grid;
        overflow-y: auto;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        background: ${theme.color.background.white};
      }

      & ${Heading} {
        display: flex;
        justify-content: center;
        padding-bottom: ${theme.padding.large};
      }
    }
  `}`;

export const MenuContainer = Styled.div`
${({ theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${theme.media.maxWidth768px} {
    display: block;
    text-align: center;
  } ;
`}`;

export const MenuIcon = Styled.div`
${({ theme, visible }) => css`
  display: none;
  border: none;

  @media ${theme.media.maxWidth768px} {
    display: flex;
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 6;
    width: 3.5rem;
    heigth: 3.5rem;
    background: none;
    pointer-events: ${visible ? 'none' : 'all'};
  }
`}`;
