import P from 'prop-types';
import * as Styled from './styles';

export default function SectionBackground({ children, background = false }) {
  return (
    <Styled.Container background={background}>{children}</Styled.Container>
  );
}

SectionBackground.prototype = {
  children: P.node.isRequired,
  background: P.bool,
};
