import P from 'prop-types';
import * as Styled from './styles';

export default function TextComponent({ children }) {
  return <Styled.Container>{children}</Styled.Container>;
}

TextComponent.propTypes = {
  children: P.node.isRequired,
};
