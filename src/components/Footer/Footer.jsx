import P from 'prop-types';
import * as Styled from './styles';
import TextComponent from '../TextComponent/TextComponent';
import SectionContainer from '../SectionContainer/SectionContainer';

export default function Footer({ Footer_html }) {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{Footer_html}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
}

Footer.propTypes = {
  Footer_html: P.string.isRequired,
};
