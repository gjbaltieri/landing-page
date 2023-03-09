import Styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Header/Title';

export const Container = Styled.div`
  ${({ theme }) => css`
    position: fixed;
    heigth: 10px;
    z-index: 5;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;

    > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
      background: white;
      border-bottom: solid ${theme.color.background.black};
    }
    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.maxWidth768px} {
      > ${SectionContainer} {
        display: grid;
        overflow-y: auto;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
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
