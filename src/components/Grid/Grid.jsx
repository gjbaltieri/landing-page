import P from 'prop-types';
import * as Styled from './styles';
import SectionBackground from '../SectionBackground/SectionBackground';
import Heading from '../Header/Heading';
import TextComponent from '../TextComponent/TextComponent';
import { useState } from 'react';

export default function Grid({ title, text, srcImg, background = false }) {
  return (
    <SectionBackground background={changeBG}>
      <Styled.Container background={changeBG}>
        <Styled.TextContainer>
          <Heading as='h1' fontSize='xhuge'>
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={srcImg} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
}

Grid.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
};
