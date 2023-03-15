import 'jest-styled-components';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderTheme from '../../style/renderTheme';
import GridImage from './GridImage';

describe('<GridImage/>', () => {
  test('should render GridImage with default values', () => {
    renderTheme(<GridImage>children</GridImage>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
