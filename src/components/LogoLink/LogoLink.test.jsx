import 'jest-styled-components';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderTheme from '../../style/renderTheme';
import LogoLink from './LogoLink';

describe('<LogoLink/>', () => {
  test('should render LogoLink with correct image', () => {
    renderTheme(<LogoLink link='#target' imgSrc='image.jpg' text='any_text' />);
    expect(screen.getByAltText('any_text')).toHaveAttribute('src', 'image.jpg');
  });
  test('should render LogoLink with correct href', () => {
    renderTheme(<LogoLink link='#target' text='any_text' />);
    expect(screen.getByRole('link', { name: 'any_text' })).toHaveAttribute(
      'href',
      '#target'
    );
  });

  test('should render LogoLink with correct snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link='#target' text='any_text' imgSrc='image.jpg' />
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });
});
