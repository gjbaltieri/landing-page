import P from 'prop-types';
import * as Styled from './styles';

export default function MenuLink({ children, newTab, link }) {
  const target = newTab ? '_blank' : '_self';
  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
}

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.node.isRequired,
  newTab: P.bool,
};
