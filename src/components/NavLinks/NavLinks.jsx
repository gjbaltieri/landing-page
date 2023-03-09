import P from 'prop-types';
import * as Styled from './styles';
import MenuLink from '../MenuLink/MenuLink.jsx';

export default function NavLinks({ links = [] }) {
  return (
    <Styled.Container>
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Styled.Container>
  );
}

NavLinks.prototype = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    })
  ),
};
