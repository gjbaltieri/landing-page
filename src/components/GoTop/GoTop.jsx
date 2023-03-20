import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

export default function GoTop() {
  return (
    <Styled.Container href='#' title='Go top' aria-label='Go top'>
      <KeyboardArrowUp />
    </Styled.Container>
  );
}
