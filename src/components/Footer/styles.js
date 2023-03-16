import Styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = Styled.div`
${({ theme }) => css`
  text-align: center;
  border-top: 0.1rem solid ${theme.color.background.black};
  a {
    color: inherit;
    text-decoration: none;
    font-size: ${theme.font.size.base};
    text-align: center;
  }
  ${SectionContainer} {
    padding: 0;
  }
`}`;
