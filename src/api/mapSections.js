export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return sectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return sectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { __component: { text_grid = [], image_grid = [] } = '' } = section;

      if (text_grid.lenght > 0) {
        return mapTextGrid(section);
      }

      //   if (text_grid.lenght > 0) {
      //     return
      //   }
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
    content: html = '',
    metadata: { background = false, section_id = '' } = {},
  } = section;
  return {
    component,
    title,
    html,
    background,
    section_id,
  };
};

export const mapTextGrid = (section = []) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    text_grid: grid = [],
    metadata: { background = false, section_id = '' } = {},
  } = section;
  return {
    component,
    title,
    description,
    grid,
    background,
    section_id,
  };
};

export const mapImageGrid = (section = []) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    image_grid: grid = [],
    metadata: { background = false, section_id = '' } = {},
  } = section;
  return {
    component,
    title,
    description,
    grid,
    background,
    section_id,
  };
};
