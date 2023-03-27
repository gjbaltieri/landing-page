const mapMenu = (menuData = {}) => {
  const {
    id = null,
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    logo: { url: srcImg = '' } = '',
    menu_link: links = [],
  } = menuData;
  return {
    id,
    newTab,
    text,
    link,
    srcImg,
    links: mapMenuLinks(links),
  };
};

const mapMenuLinks = (menuLinksData = []) => {
  return menuLinksData.map((data) => {
    const {
      id = null,
      link_text: children = '',
      url: link = '',
      open_in_new_tab: newTab = false,
    } = data;
    return {
      id,
      children,
      link,
      newTab,
    };
  });
};

export { mapMenu, mapMenuLinks };
