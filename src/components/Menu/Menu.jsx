/* eslint-disable react/forbid-foreign-prop-types */
import P from 'prop-types';
import * as Styled from './styles';
import SectionContainer from '../SectionContainer/SectionContainer';
import LogoLink from '../LogoLink/LogoLink';
import NavLinks from '../NavLinks/NavLinks';

export default function Menu({ links = [], logoData }) {
  console.log(links);
  return (
    <Styled.Container>
      <SectionContainer>
        <Styled.MenuContainer>
          <LogoLink {...logoData} />
          <NavLinks links={links} />
        </Styled.MenuContainer>
      </SectionContainer>
    </Styled.Container>
  );
}

Menu.prototype = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
