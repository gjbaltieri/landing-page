import 'jest-styled-components';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderTheme from '../../style/renderTheme';
import TextComponent from './TextComponent';
import { theme } from '../../style/theme';

describe('<TextComponent/>', () => {
  test('should render TextComponent', () => {
    renderTheme(<TextComponent>paragraph</TextComponent>);
    expect(screen.getByText('paragraph')).toBeInTheDocument();
  });
  test('should render TextComponent with default values', () => {
    renderTheme(<TextComponent>paragraph</TextComponent>);
    expect(screen.getByText('paragraph')).toBeInTheDocument();
  });
  test('should TextComponent match snapshot', () => {
    const { container } = renderTheme(<TextComponent>paragraph</TextComponent>);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-size: 1.6rem;
        -webkit-transition: color 300ms ease-in-out;
        transition: color 300ms ease-in-out;
      }

      <div>
        <div
          class="c0"
        >
          paragraph
        </div>
      </div>
    `);
  });
});
