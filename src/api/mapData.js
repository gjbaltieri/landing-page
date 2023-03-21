import { mapMenu, mapMenuLinks } from './mapMenu';
import { mapSections } from './mapSections';

export const mapData = (pageData = [{}]) => {
  return pageData.map((data) => {
    const {
      menu = {},
      menu_link = [],
      title = '',
      sections = [],
      slug = '',
      footer_text = '',
    } = data;
    return {
      menu: mapMenu(menu),
      menu_link: mapMenuLinks(menu_link),
      slug,
      title,
      sections: mapSections(sections),
      footer_HTML: footer_text,
    };
  });
};
