import 'jest-styled-components';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderTheme from '../../style/renderTheme';
import Grid from './Grid';
import Mock from './grid-mock';

describe('<Grid/>', () => {
  test('should render Grid with default values', () => {
    const { container } = renderTheme(<Grid {...Mock} />);
    expect(container).toMatchSnapshot();
  });
});
