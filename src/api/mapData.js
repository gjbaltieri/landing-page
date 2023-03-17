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
      menu,
      menu_link,
      slug,
      title,
      sections,
      footer_HTML: footer_text,
    };
  });
};
