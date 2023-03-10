import 'jest-styled-components';
import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import renderTheme from '../../style/renderTheme';
import Menu from './Menu';
import { theme } from '../../style/theme';
import { links } from '../NavLinks/mocklinks';

const logoData = {
  text: 'Logo',
  link: '#Target',
};

describe('<Menu/>', () => {
  test('should render Menu with default values', () => {
    const { container } = renderTheme(
      <Menu logoData={logoData} links={links} />
    );
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main menu' })
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('should render Menu mobile with button', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);
    const button = screen.getByLabelText('Open/Close menu');
    // eslint-disable-next-line testing-library/no-node-access
    const menuContainer = button.nextSibling;
    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.maxWidth768px,
    });
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.maxWidth768px,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.maxWidth768px,
    });
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.maxWidth768px,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should <Menu/> not render links', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);
    expect(
      // eslint-disable-next-line testing-library/no-node-access
      screen.queryByRole('navigation', { name: 'Main menu' }).firstChild
    ).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
