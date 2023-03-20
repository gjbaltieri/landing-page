import { mapMenu } from './mapMenu';
import { mapMenuLinks } from './mapMenu';

const mockMenu = {
  id: 12,
  logo_text: 'my logo',
  open_in_new_tab: false,
  logo_link: '#target',
  menu_link: [
    {
      id: 7,
      link_text: 'Instagram',
      url: 'http://instagram.com/gjbaltieri',
      open_in_new_tab: true,
    },
    {
      id: 6,
      link_text: 'Twitter',
      url: 'http://twitter.com/gjbaltieri',
      open_in_new_tab: true,
    },
    {
      id: 9,
      link_text: 'Linkedin',
      url: 'http://linkedin.com',
      open_in_new_tab: true,
    },
    {},
  ],
};

describe('mapMenu', () => {
  it('Should mapMenu even if there is no data', () => {
    const menuData = mapMenu();
    expect(menuData.newTab).toBe(false);
    expect(menuData.text).toBe('');
    expect(menuData.link).toBe('');
    expect(menuData.id).toBe(null);
    expect(menuData.srcImg).toBe('');
    expect(menuData.links).toEqual([]);
  });

  it('Should mapMenuLinks even if there is no data', () => {
    const menuData = mapMenuLinks();
    expect(menuData).toEqual([]);
  });

  it('Should mapMenuLinks return a data', () => {
    const menuData = mapMenuLinks(mockMenu.menu_link);
    expect(menuData.id).toEqual(mockMenu.menu_link.id);
    expect(menuData.children).toEqual(mockMenu.menu_link.link_text);
    expect(menuData.url).toEqual(mockMenu.menu_link.url);
    expect(menuData.newTab).toEqual(mockMenu.menu_link.open_in_new_tab);
  });
});
