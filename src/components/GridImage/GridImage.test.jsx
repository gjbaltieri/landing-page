import 'jest-styled-components';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderTheme from '../../style/renderTheme';
import GridImage from './GridImage';
import Mock from './GridImage-mock';

describe('<GridImage/>', () => {
  test('should render GridImage with default values', () => {
    renderTheme(<GridImage {...Mock} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
