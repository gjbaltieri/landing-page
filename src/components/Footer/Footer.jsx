import P from 'prop-types';
import * as Styled from './styles';
import TextComponent from '../TextComponent/TextComponent';
import SectionContainer from '../SectionContainer/SectionContainer';

export default function Footer({ html }) {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{html}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
}

Footer.prototype = {
  html: P.string.isRequired,
};
