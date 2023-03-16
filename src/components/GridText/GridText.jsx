import P from 'prop-types';
import * as Styled from './styles';
import SectionBackground from '../SectionBackground/SectionBackground';
import Heading from '../Header/Heading';
import TextComponent from '../TextComponent/TextComponent';

export default function GridText({
  title,
  description,
  grid,
  background = false,
}) {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading uppercase as='h2' fontSize='large' darkMode={background}>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>

        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={el.title}>
              <Heading size='medium' darkMode={background} as='h3'>
                {el.title}
              </Heading>
              <TextComponent>{el.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
}

GridText.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    })
  ).isRequired,
};
