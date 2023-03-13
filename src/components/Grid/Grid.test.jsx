import 'jest-styled-components';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderTheme from '../../style/renderTheme';
import Grid from './Grid';

describe('<Grid/>', () => {
  test('should render Grid with default values', () => {
    renderTheme(<Grid>children</Grid>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
