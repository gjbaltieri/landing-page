import P from 'prop-types';
import * as Styled from './styles';

export default function SectionContainer({ children }) {
  return <Styled.Container>{children}</Styled.Container>;
}

SectionContainer.prototype = {
  children: P.node.isRequired,
};
