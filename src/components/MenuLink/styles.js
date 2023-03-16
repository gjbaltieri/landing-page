import Styled, { css } from 'styled-components';

export const Container = Styled.a`
    ${({ theme }) => css`
      color: ${theme.color.heading.black};
      font-size: ${theme.font.size.base};
      padding: ${theme.padding.base};
      text-decoration: none;
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
        background-color: white;
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.3s ease;
      }

      &:hover::after {
        transform: scaleX(1);
      }
    `}`;
