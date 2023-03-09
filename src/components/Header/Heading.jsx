import * as Styled from './Title';
import P from 'prop-types';

export default function Heading({
  children,
  uppercase = false,
  darkMode = false,
  as = 'h1',
  fontSize = 'base',
}) {
  return (
    <Styled.Title
      darkMode={darkMode}
      as={as}
      fontSize={fontSize}
      uppercase={uppercase}
    >
      {children}
    </Styled.Title>
  );
}

Heading.propTypes = {
  children: P.node.isRequired,
  darkMode: P.bool,
  uppercase: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  fontSize: P.oneOf([
    'small',
    'base',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
    'huge',
    'xhuge',
  ]),
};
