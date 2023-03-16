import P from 'prop-types';
import * as Styled from './styles';
import SectionBackground from '../SectionBackground/SectionBackground';
import Heading from '../Header/Heading';
import TextComponent from '../TextComponent/TextComponent';

export default function GridImage({
  background,
  title,
  description,
  grid = [],
}) {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading darkMode={background} uppercase fontSize='xlarge' as='h2'>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.ImageContainer>
          {grid.map((img) => (
            <Styled.ImageElement key={img.alt}>
              <Styled.Image src={img.srcImg} alt={img.alt} />
            </Styled.ImageElement>
          ))}
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
}

GridImage.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      srcImg: P.string.isRequired,
      alt: P.string.isRequired,
    })
  ),
};
