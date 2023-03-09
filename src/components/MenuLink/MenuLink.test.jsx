import 'jest-styled-components';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderTheme from '../../style/renderTheme';
import MenuLink from './MenuLink';

describe('<MenuLink/>', () => {
  test('should render MenuLink with default values', () => {
    renderTheme(
      <MenuLink children link='http://google.com'>
        children
      </MenuLink>
    );
    // eslint-disable-next-line jest/valid-expect
    expect(screen.getByRole('link', { name: 'children' })).toHaveAttribute(
      'target',
      '_blank'
    );
  });
  test('should render MenuLink in new tab', () => {
    renderTheme(
      <MenuLink children link='http://google.com' newTab={true}>
        children
      </MenuLink>
    );
    // eslint-disable-next-line jest/valid-expect
    expect(screen.getByRole('link', { name: 'children' })).toHaveAttribute(
      'target',
      '_self'
    );
  });
  test('should MenuLink match snapshot', () => {
    const { container } = renderTheme(
      <MenuLink children link='http://google.com' newTab={true}>
        children
      </MenuLink>
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 1.6rem;
        padding: 1.6rem;
        -webkit-text-decoration: none;
        text-decoration: none;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0.75rem;
        width: 0;
        left: 50%;
        height: 0.2rem;
        background: red;
        -webkit-transition: all 250ms ease-in-out;
        transition: all 250ms ease-in-out;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      <a
        class="c0"
        href="http://google.com"
        target="_self"
      >
        children
      </a>
    `);
  });
});
