import P from 'prop-types';
import * as Styled from './styles';
import Heading from '../Header/Heading';

export default function LogoLink({ imgSrc = '', text, link }) {
  return (
    <Heading fontSize='base' uppercase>
      <Styled.Container href={link}>
        {!!imgSrc && <img src={imgSrc} alt={text} />}
        {!imgSrc && text}
      </Styled.Container>
    </Heading>
  );
}

LogoLink.propTypes = {
  link: P.string.isRequired,
  text: P.string.isRequired,
  imgSrc: P.string,
};
