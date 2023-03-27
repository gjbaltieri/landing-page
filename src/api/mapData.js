import { mapMenu, mapMenuLinks } from './mapMenu';
import { mapSections } from './mapSections';

export const mapData = (pageData = [{}]) => {
  return pageData.map((data) => {
    const {
      menu = {},
      title = '',
      sections = [],
      slug = '',
      footer_text = '',
    } = data.attributes;
    return {
      menu: mapMenu(menu),
      slug,
      title,
      sections: mapSections(sections),
      footer_HTML: footer_text,
    };
  });
};
