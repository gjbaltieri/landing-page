/* eslint-disable react/forbid-foreign-prop-types */
import P from 'prop-types';
import * as Styled from './styles';
import SectionContainer from '../SectionContainer/SectionContainer';
import LogoLink from '../LogoLink/LogoLink';
import NavLinks from '../NavLinks/NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as MenuClose } from '@styled-icons/material-outlined/Close';

import { useState } from 'react';

export default function Menu({ links = [], logoData }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Styled.MenuIcon
        onClick={() => setMenuOpen(!menuOpen)}
        visible={menuOpen}
        aria-label='Open/Close menu'
      >
        {menuOpen ? (
          <MenuClose aria-label='Close menu' />
        ) : (
          <MenuIcon aria-label='Open menu' />
        )}
      </Styled.MenuIcon>
      <Styled.Container visible={menuOpen} onClick={() => setMenuOpen(false)}>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
}

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
