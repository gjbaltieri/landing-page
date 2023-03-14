import Styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.size.small};
  `,
  base: (theme) => css`
    font-size: ${theme.font.size.base};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.size.medium};
  `,
  large: (theme) => css`
    font-size: ${theme.font.size.large};
  `,
  xlarge: (theme) => css`
    font-size: ${theme.font.size.xlarge};
  `,
  xxlarge: (theme) => css`
    font-size: ${theme.font.size.xxlarge};
  `,
  huge: (theme) =>
    css`
      font-size: ${theme.font.size.huge};
    `,
  xhuge: (theme) =>
    css`
      font-size: ${theme.font.size.xhuge};
      ${mediaFont(theme)};
    `,
};

const isUppercase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;
const mediaFont = (theme) => css`
  @media ${theme.media.maxWidth768px} {
    font-size: ${theme.font.size.xlarge};
  } ;
`;

export const Title = Styled.h1`
    ${({ theme, darkMode, fontSize, uppercase }) => css`
      color: ${darkMode
        ? theme.color.heading.white
        : theme.color.heading.black};
      font-size: ${titleSize[fontSize](theme)};
      font-weight: ${theme.font.weight};
      ${isUppercase(uppercase)};
      ${titleSize[fontSize](theme)};
    `}
`;
