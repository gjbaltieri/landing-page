import 'jest-styled-components';
import { screen } from '@testing-library/react';
import renderTheme from '../../style/renderTheme';
import Heading from './Heading';
import '@testing-library/jest-dom';
import { theme } from '../../style/theme';

describe('<Heading/>', () => {
  test('should render Heading with default values', () => {
    renderTheme(<Heading>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });
    expect(heading).toHaveStyle({
      color: theme.color.heading.black,
      'font-size': theme.font.size.base,
      'text-transform': 'none',
    });
  });
  test('should render Heading with font-size: small', () => {
    renderTheme(<Heading fontSize='small'>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.size.small,
    });
  });
  test('should render Heading with font-size: base', () => {
    renderTheme(<Heading fontSize='base'>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.size.base,
    });
  });
  test('should render Heading with font-size: medium', () => {
    renderTheme(<Heading fontSize='medium'>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.size.medium,
    });
  });
  test('should render Heading with font-size: large', () => {
    renderTheme(<Heading fontSize='large'>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.size.large,
    });
  });
  test('should render Heading with font-size: xlarge', () => {
    renderTheme(<Heading fontSize='xlarge'>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.size.xlarge,
    });
  });
  test('should render Heading with font-size: xxlarge', () => {
    renderTheme(<Heading fontSize='xxlarge'>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.size.xxlarge,
    });
  });
  test('should render Heading with font-size: huge', () => {
    renderTheme(<Heading fontSize='huge'>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.size.huge,
    });
  });
  test('should render Heading with font-size: xhuge', () => {
    renderTheme(<Heading fontSize='xhuge'>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.size.xhuge,
    });
  });
  test('should render correct font-size when use mobile (max-width: 768px)', () => {
    renderTheme(<Heading fontSize='xhuge'>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });
    expect(heading).toHaveStyleRule('font-size', theme.font.size.xlarge, {
      media: theme.media.maxWidth768px,
    });
  });
  test('should render Heading with uppercase', () => {
    renderTheme(<Heading uppercase={true}>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });
    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });
  test('should render with correct Heading element', () => {
    const { container } = renderTheme(<Heading as='h2'>Texto</Heading>);
    screen.getByRole('heading', { name: 'Texto' });
    // eslint-disable-next-line testing-library/no-node-access, testing-library/no-container
    const h2 = container.querySelector('h2');
    expect(h2.tagName.toLowerCase()).toBe('h2');
  });
  test('should Heading match snapshot', () => {
    const { container } = renderTheme(<Heading>Texto</Heading>);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        color: #333333;
        font-size: font-size:1.6rem;
        font-weight: 900;
        text-transform: none;
        font-size: 1.6rem;
        -webkit-transition: color 300ms ease-in-out;
        transition: color 300ms ease-in-out;
      }

      <div>
        <h1
          class="c0"
          font-size="base"
        >
          Texto
        </h1>
      </div>
    `);
  });
});
