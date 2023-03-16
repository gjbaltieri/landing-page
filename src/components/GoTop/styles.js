import Styled, { css } from 'styled-components';
export const Container = Styled.a`
${({ theme }) => css`
  background: ${theme.color.background.black};
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  color: ${theme.color.background.white};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  opacity: 0.6;
  transition: all 300ms ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  &:hover {
    opacity: 1;
    bottom: 3rem;
  }
`}`;
