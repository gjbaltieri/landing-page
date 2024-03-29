import P from 'prop-types';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import GoTop from '../../components/GoTop/GoTop';
import * as Styled from './styles';

export default function Base({ links = [], logoData, footerHTML, children }) {
  return (
    <>
      <Styled.Container>
        <Menu links={links} logoData={logoData} />
        {children}
        <Footer Footer_html={footerHTML} />
      </Styled.Container>
      <GoTop />
    </>
  );
}

Base.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  footerHTML: P.string.isRequired,
};
