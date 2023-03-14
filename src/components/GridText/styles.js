import Styled, { css } from 'styled-components';
import { Title as HeadingComponent } from '../Header/Title';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = Styled.div`
${({ theme }) => css`
  ${TextComponent} {
    margin-bottom: ${theme.padding.xhuge};
  }
`}`;

export const Grid = Styled.div`
${({ theme }) => css`
  counter-reset: element-counter;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  overflow: hidden;
  width: 100%;
  @media ${theme.media.maxWidth768px} {
    grid-template-columns: 1fr;
  }
`}
`;

export const GridElement = Styled.div`
${({ theme }) => css`
  padding: ${theme.padding.base};
  ${HeadingComponent} {
    position: relative;
    left: 5rem;
  }

  ${HeadingComponent}::before {
    counter-increment: element-counter;
    content: counter(element-counter);
    position: absolute;
    top: -3rem;
    left: -5rem;
    font-size: ${theme.font.size.xxlarge};
    transform: rotate(5deg);
  }
`}`;
