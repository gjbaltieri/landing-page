/* eslint-disable testing-library/no-node-access */
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { links } from './mocklinks';
import { screen } from '@testing-library/react';
import renderTheme from '../../style/renderTheme';
import NavLinks from './NavLinks';
import { theme } from '../../style/theme';

describe('<NavLinks/>', () => {
  test('should render NavLinks with correct links length', () => {
    renderTheme(<NavLinks links={links} />);
    expect(screen.getAllByRole('link')).toHaveLength(links.length);
  });
  test('should render NavLinks with correct media query', () => {
    renderTheme(<NavLinks links={links} />);
    expect(screen.getByText(/google/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      { media: theme.media.maxWidth768px }
    );
  });
  test('should NavLinks not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });
  test('should NavLinks match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={links} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
