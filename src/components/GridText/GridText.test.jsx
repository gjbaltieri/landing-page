import 'jest-styled-components';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderTheme from '../../style/renderTheme';
import GridText from './GridText';
import Mock from '../GridText/mock-GridText';

describe('<GridText/>', () => {
  test('should render GridText with default values', () => {
    const { container } = renderTheme(<GridText {...Mock} />);
    expect(container).toMatchSnapshot();
  });
});
