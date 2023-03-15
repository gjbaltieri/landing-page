import P from 'prop-types';
import * as Styled from './styles';
import SectionContainer from '../SectionContainer/SectionContainer';

export default function SectionBackground({ children, background = false }) {
  return (
    <Styled.Container background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
}

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
};
