import 'jest-styled-components';
import '@testing-library/jest-dom';
import renderTheme from '../../style/renderTheme';
import GridText from './GridText';
import Mock from '../GridText/mock-GridText';

describe('<GridText/>', () => {
  test('should render GridText with default values', () => {
    const { container } = renderTheme(<GridText {...Mock} />);
    expect(container).toMatchSnapshot();
  });

  test('should render GridText without background', () => {
    const { container } = renderTheme(
      <GridText {...Mock} background={undefined} />
    );
    expect(container).toMatchSnapshot();
  });
});
