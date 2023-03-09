import Styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => theme.font.size.small,
  base: (theme) => theme.font.size.base,
  medium: (theme) => theme.font.size.medium,
  large: (theme) => theme.font.size.large,
  xlarge: (theme) => theme.font.size.xlarge,
  xxlarge: (theme) => theme.font.size.xxlarge,
  huge: (theme) => theme.font.size.huge,
  xhuge: (theme) => theme.font.size.xhuge,
};

const isUppercase = (uppercase) => (uppercase ? 'uppercase' : 'none');
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
      text-transform: ${isUppercase(uppercase)};
      ${mediaFont(theme)}
    `}
`;
