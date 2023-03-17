import 'jest-styled-components';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderTheme from '../../style/renderTheme';
import Footer from './Footer';

describe('<Footer/>', () => {
  test('should render Footer with default values', () => {
    renderTheme(<Footer Footer_html={'<h1> Hello world </h1>'} />);
    expect(
      screen.getByRole('heading', { name: 'Hello world' })
    ).toBeInTheDocument();
  });
});
