export const mapSections = (sections = []) => {
  // eslint-disable-next-line array-callback-return
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return sectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return sectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;

      if (text_grid.length > 0) {
        console.log('text passou');
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }
    return section;
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

  const srcImg = image?.data?.attributes?.url ?? '';
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

export const mapTextGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    text_grid: grid = [],
    metadata: { background = false, section_id = '' } = {},
  } = section;
  return {
    component: 'section.section-grid-text',
    title,
    description,
    grid: grid.map((text) => {
      const { title = '', description = '' } = text;
      return {
        title,
        description,
      };
    }),
    background,
    section_id,
  };
};

export const mapImageGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    image_grid: grid = [],
    metadata: { background = false, section_id = '' } = {},
  } = section;
  return {
    component: 'section.section-grid-image',
    title,
    description,
    grid: grid.map((img) => {
      const {
        image: {
          data: {
            attributes: { url: srcImg = '', alternativeText: altText = '' },
          },
        },
      } = img;
      return {
        srcImg,
        altText,
      };
    }),
    background,
    section_id,
  };
};
