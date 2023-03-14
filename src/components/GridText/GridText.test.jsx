import 'jest-styled-components';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderTheme from '../../style/renderTheme';
import GridText from './GridText';

describe('<GridText/>', () => {
  test('should render GridText with default values', () => {
    renderTheme(<GridText>children</GridText>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
