import Styled, { css } from 'styled-components';
export const Container = Styled.a`
    ${({ theme }) => css`
      font-size: ${theme.font.size.base};
      padding: ${theme.padding.base};
      text-decoration: none;
      color: ${theme.color.heading.black};
      position: relative;
      &:before {
        content: '';
        background: #54b3d6;
        display: block;
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 3px;
      }
      &::after {
        content: '';
        position: absolute;
        bottom: 0.75rem;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: ${theme.color.background.black};
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.3s ease;
      }

      &:hover::after {
        transform: scaleX(1);
      }
    `}`;
