import Styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Header/Title';
import { Container as MenuLink } from '../MenuLink/styles';

const MenuClose = (theme) => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = Styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    heigth: 10px;
    width: 100%;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    transition: all 300ms ease-in-out;
    background: ${theme.color.background.white};
    & ${MenuLink} {
      &::after {
        background-color: ${theme.color.background.black};
      }
    }
    > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
      background: ${theme.color.background.white};
      border-bottom: solid ${theme.color.background.white};
    }
    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
      color: ${theme.color.background.black};
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
      ${MenuLink} {
        color: ${theme.color.background.black};
        &::after {
          background-color: ${theme.color.background.black};
        }
      }
      & ${Heading} {
        display: flex;
        justify-content: center;
        padding-bottom: ${theme.padding.large};
        color: ${theme.color.background.black};
      }
    }
  `}`;

export const MenuContainer = Styled.div`
${({ theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.color.background.black};
  @media ${theme.media.maxWidth768px} {
    display: block;
    text-align: center;
  }
`}`;

export const MenuIcon = Styled.div`
${({ theme, visible }) => css`
  display: none;
  border: none;

  @media ${theme.media.maxWidth768px} {
    color: ${theme.color.background.white};
    padding: 2px;
    background: ${theme.color.background.black};
    opacity: 0.6;
    border-radius: 50%;
    display: flex;
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 6;
    width: 3.5rem;
    heigth: 3.5rem;
    pointer-events: ${visible ? 'none' : 'all'};
  }
`}`;
