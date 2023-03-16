import 'jest-styled-components';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderTheme from '../../style/renderTheme';
import GoTop from './GoTop';

describe('<GoTop/>', () => {
  test('should render GoTop with default values', () => {
    const { container } = renderTheme(<GoTop />);
    expect(screen.getByRole('link', { name: 'Go top' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go top' })).toHaveAttribute(
      'Href',
      '#'
    );
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background: #0D0D0D;
        position: fixed;
        right: 2rem;
        bottom: 2rem;
        color: #F2F2F2;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        opacity: 0.6;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
      }

      .c0:hover {
        opacity: 1;
        bottom: 3rem;
      }

      .c1 {
        display: inline-block;
        vertical-align: middle;
        overflow: hidden;
      }

      <div>
        <a
          aria-label="Go top"
          class="c0"
          href="#"
          title="Go top"
        >
          <svg
            aria-hidden="true"
            class="c1"
            fill="currentColor"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"
            />
          </svg>
        </a>
      </div>
    `);
  });
});
