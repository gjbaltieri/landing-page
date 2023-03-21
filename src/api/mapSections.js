export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return sectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return sectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      return sectionGrid(section);
    }
  });
};

export const sectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image,
    metadata = [],
  } = section;

  const srcImg = image?.data?.attributes?.formats?.large?.url ?? '';
  const background = metadata[0]?.background ?? false;
  const sectionId = metadata[0]?.section_id ?? '';

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const sectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content = '',
    metadata: { background = false } = {},
  } = section;
  return {
    component,
    title,
    content,
    background,
  };
};

export const sectionGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    text_grid = [],
    image_grid = [],
  } = section;
  return {
    component,
    title,
    description,
    text_grid,
    image_grid,
  };
};
