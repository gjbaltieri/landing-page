import {
  sectionTwoColumns,
  sectionContent,
  mapTextGrid,
  mapImageGrid,
} from './mapSections';

const mockTwoColumns = {
  id: 12,
  __component: 'section.section-two-columns',
  title: 'twocolumns1',
  description:
    'Curabitur pellentesque dui tellus, vitae porttitor ante aliquam quis. Aliquam ante odio, ullamcorper ac urna ac, egestas tempor nulla. Praesent venenatis et nunc efficitur euismod. Integer a dictum lectus, quis hendrerit dolor. Sed ut justo pulvinar, placerat neque quis, mattis risus. Nullam eu lobortis enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris luctus arcu egestas, auctor dolor et, maximus elit. Nunc eros neque, sollicitudin nec aliquet at, vehicula nec nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ullamcorper sapien quis sem scelerisque, eget iaculis urna sagittis. Nullam blandit placerat bibendum.',
  metadata: [
    {
      id: 20,
      name: 'twocolumns1metadata',
      section_id: 'twocolumns1metadata',
      background: true,
    },
  ],
  image: {
    data: {
      id: 8,
      attributes: {
        name: 'R.06b30bf7c07c4af811e3ec10f1d5fb27',
        alternativeText: null,
        caption: null,
        width: 2048,
        height: 1366,
        formats: {
          large: {
            ext: '.06b30bf7c07c4af811e3ec10f1d5fb27',
            url: 'https://res.cloudinary.com/dcypqvtfu/image/upload/v1679077620/large_R_5994e5bc47.jpg',
            hash: 'large_R_5994e5bc47',
            mime: 'image/jpeg',
            name: 'large_R.06b30bf7c07c4af811e3ec10f1d5fb27',
            path: null,
            size: 95.75,
            width: 1000,
            height: 667,
            provider_metadata: {
              public_id: 'large_R_5994e5bc47',
              resource_type: 'image',
            },
          },
        },
      },
    },
  },
};

const mockSectionContent = {
  id: 3,
  __component: 'section.section-content',
  title: 'SectionContent1',
  content:
    'Curabitur pellentesque dui tellus, vitae porttitor ante aliquam quis. Aliquam ante odio, ullamcorper ac urna ac, egestas tempor nulla. Praesent venenatis et nunc efficitur euismod. Integer a dictum lectus, quis hendrerit dolor. Sed ut justo pulvinar, placerat neque quis, mattis risus. Nullam eu lobortis enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris luctus arcu egestas, auctor dolor et, maximus elit. Nunc eros neque, sollicitudin nec aliquet at, vehicula nec nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ullamcorper sapien quis sem scelerisque, eget iaculis urna sagittis. Nullam blandit placerat bibendum.\n\nIn luctus vitae neque nec porta. Praesent aliquam mi id accumsan rutrum. Nulla ex felis, fermentum a tincidunt ut, tempor quis ipsum. Nullam ut auctor risus. Mauris quis odio at justo suscipit laoreet non et tellus. Vestibulum auctor nisi vel placerat pulvinar. Aliquam suscipit dolor ac quam vehicula congue et vitae ipsum.\n\nDuis lacinia vel arcu sit amet pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut ipsum sit amet justo congue volutpat. Integer ut pretium elit, in blandit nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla faucibus et felis vel laoreet. Integer eu nunc eget metus sodales vehicula et vitae ligula. Quisque finibus enim ac pretium facilisis. Phasellus iaculis tempus lacus sed scelerisque. Praesent convallis nunc auctor aliquam dignissim.\n\nCurabitur rutrum dui quis lectus efficitur, non fermentum lorem vulputate. Donec at nulla in elit ultricies venenatis. Nunc laoreet consectetur aliquam. Vivamus sagittis feugiat nunc quis viverra. Cras quis finibus ligula, vel vestibulum urna. Sed porttitor, libero sed consequat vehicula, orci velit pulvinar nisl, ac vehicula nibh velit quis sem. Quisque mauris felis, commodo ac euismod at, bibendum sed quam. Curabitur in mi ornare, ultrices sem eu, pulvinar nulla. Aenean non condimentum turpis. Integer eu lectus ullamcorper arcu posuere porta eget quis leo. Vestibulum fermentum purus quis venenatis dictum. Duis fermentum volutpat efficitur. Donec eleifend metus a metus iaculis, vel tincidunt metus suscipit. Integer hendrerit tellus libero, eget vehicula turpis imperdiet vitae. Sed sit amet erat vitae justo consequat dictum non eu metus.',
  metadata: {
    id: 17,
    name: 'SectionContent1',
    section_id: 'sectionContent',
    background: true,
  },
};

const mockSectionGrid = {
  id: 4,
  __component: 'section.section-grid',
  title: 'Grid1',
  description: 'Grid1 description',
  text_grid: [],
  image_grid: [
    {
      id: 12,
      image: {
        data: {
          id: 6,
          attributes: {
            name: 'Capturar.PNG',
            alternativeText:
              'https://res.cloudinary.com/dcypqvtfu/image/upload/v1674653632/Capturar_360c3d3412.png?updated_at=2023-01-25T13:33:54.319Z',
            caption:
              'https://res.cloudinary.com/dcypqvtfu/image/upload/v1674653632/Capturar_360c3d3412.png?updated_at=2023-01-25T13:33:54.319Z',
            width: 350,
            height: 144,
            formats: {
              thumbnail: {
                ext: '.PNG',
                url: 'https://res.cloudinary.com/dcypqvtfu/image/upload/v1674653632/thumbnail_Capturar_360c3d3412.png',
                hash: 'thumbnail_Capturar_360c3d3412',
                mime: 'image/png',
                name: 'thumbnail_Capturar.PNG',
                path: null,
                size: 23.45,
                width: 245,
                height: 101,
                provider_metadata: {
                  public_id: 'thumbnail_Capturar_360c3d3412',
                  resource_type: 'image',
                },
              },
            },
            hash: 'Capturar_360c3d3412',
            ext: '.PNG',
            mime: 'image/png',
            size: 9.65,
            url: 'https://res.cloudinary.com/dcypqvtfu/image/upload/v1674653632/Capturar_360c3d3412.png',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'Capturar_360c3d3412',
              resource_type: 'image',
            },
            createdAt: '2023-01-25T13:33:54.319Z',
            updatedAt: '2023-01-25T13:34:22.590Z',
          },
        },
      },
    },
    {
      id: 13,
      image: {
        data: {
          id: 3,
          attributes: {
            name: 'belle.jpg',
            alternativeText: 'belle',
            caption: 'belle legenda',
            width: 217,
            height: 232,
            formats: {
              thumbnail: {
                ext: '.jpg',
                url: 'https://res.cloudinary.com/dcypqvtfu/image/upload/v1674489069/thumbnail_belle_753c177e8d.jpg',
                hash: 'thumbnail_belle_753c177e8d',
                mime: 'image/jpeg',
                name: 'thumbnail_belle.jpg',
                path: null,
                size: 4.22,
                width: 146,
                height: 156,
                provider_metadata: {
                  public_id: 'thumbnail_belle_753c177e8d',
                  resource_type: 'image',
                },
              },
            },
            hash: 'belle_753c177e8d',
            ext: '.jpg',
            mime: 'image/jpeg',
            size: 4.72,
            url: 'https://res.cloudinary.com/dcypqvtfu/image/upload/v1674489068/belle_753c177e8d.jpg',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'belle_753c177e8d',
              resource_type: 'image',
            },
            createdAt: '2023-01-23T15:51:10.390Z',
            updatedAt: '2023-01-25T13:23:12.947Z',
          },
        },
      },
    },
    {
      id: 14,
      image: {
        data: {
          id: 7,
          attributes: {
            name: 'direitos-autorais-e-de-imagem.jpg',
            alternativeText: null,
            caption: null,
            width: 1920,
            height: 1280,
            formats: {
              large: {
                ext: '.jpg',
                url: 'https://res.cloudinary.com/dcypqvtfu/image/upload/v1674654620/large_direitos_autorais_e_de_imagem_e0627f1e65.jpg',
                hash: 'large_direitos_autorais_e_de_imagem_e0627f1e65',
                mime: 'image/jpeg',
                name: 'large_direitos-autorais-e-de-imagem.jpg',
                path: null,
                size: 71.88,
                width: 1000,
                height: 667,
                provider_metadata: {
                  public_id: 'large_direitos_autorais_e_de_imagem_e0627f1e65',
                  resource_type: 'image',
                },
              },
              small: {
                ext: '.jpg',
                url: 'https://res.cloudinary.com/dcypqvtfu/image/upload/v1674654620/small_direitos_autorais_e_de_imagem_e0627f1e65.jpg',
                hash: 'small_direitos_autorais_e_de_imagem_e0627f1e65',
                mime: 'image/jpeg',
                name: 'small_direitos-autorais-e-de-imagem.jpg',
                path: null,
                size: 23.58,
                width: 500,
                height: 333,
                provider_metadata: {
                  public_id: 'small_direitos_autorais_e_de_imagem_e0627f1e65',
                  resource_type: 'image',
                },
              },
              medium: {
                ext: '.jpg',
                url: 'https://res.cloudinary.com/dcypqvtfu/image/upload/v1674654620/medium_direitos_autorais_e_de_imagem_e0627f1e65.jpg',
                hash: 'medium_direitos_autorais_e_de_imagem_e0627f1e65',
                mime: 'image/jpeg',
                name: 'medium_direitos-autorais-e-de-imagem.jpg',
                path: null,
                size: 45.76,
                width: 750,
                height: 500,
                provider_metadata: {
                  public_id: 'medium_direitos_autorais_e_de_imagem_e0627f1e65',
                  resource_type: 'image',
                },
              },
              thumbnail: {
                ext: '.jpg',
                url: 'https://res.cloudinary.com/dcypqvtfu/image/upload/v1674654619/thumbnail_direitos_autorais_e_de_imagem_e0627f1e65.jpg',
                hash: 'thumbnail_direitos_autorais_e_de_imagem_e0627f1e65',
                mime: 'image/jpeg',
                name: 'thumbnail_direitos-autorais-e-de-imagem.jpg',
                path: null,
                size: 6.96,
                width: 234,
                height: 156,
                provider_metadata: {
                  public_id:
                    'thumbnail_direitos_autorais_e_de_imagem_e0627f1e65',
                  resource_type: 'image',
                },
              },
            },
            hash: 'direitos_autorais_e_de_imagem_e0627f1e65',
            ext: '.jpg',
            mime: 'image/jpeg',
            size: 179.81,
            url: 'https://res.cloudinary.com/dcypqvtfu/image/upload/v1674654620/direitos_autorais_e_de_imagem_e0627f1e65.jpg',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'direitos_autorais_e_de_imagem_e0627f1e65',
              resource_type: 'image',
            },
            createdAt: '2023-01-25T13:50:21.680Z',
            updatedAt: '2023-01-25T13:50:21.680Z',
          },
        },
      },
    },
  ],
  metadata: {
    id: 19,
    name: 'fotos1',
    section_id: 'fotos',
    background: true,
  },
};

describe('mapSections suite test', () => {
  it('Should sectionTwoColumns() even if there is no data', () => {
    const TwoColumnsData = sectionTwoColumns();
    expect(TwoColumnsData.component).toBe('');
    expect(TwoColumnsData.title).toBe('');
    expect(TwoColumnsData.text).toBe('');
    expect(TwoColumnsData.srcImg).toBe('');
    expect(TwoColumnsData.background).toBe(false);
    expect(TwoColumnsData.sectionId).toBe('');
  });

  it('Should sectionTwoColumns() return a valid data', () => {
    const TwoColumnsData = sectionTwoColumns(mockTwoColumns);
    expect(TwoColumnsData.component).toBe(mockTwoColumns.__component);
    expect(TwoColumnsData.title).toBe(mockTwoColumns.title);
    expect(TwoColumnsData.text).toBe(mockTwoColumns.description);
    expect(TwoColumnsData.srcImg).toBe(
      mockTwoColumns.image.data.attributes.formats.large.url
    );
    expect(TwoColumnsData.background).toEqual(
      mockTwoColumns.metadata[0].background
    );
    expect(TwoColumnsData.sectionId).toEqual(
      mockTwoColumns.metadata[0].section_id
    );
  });

  it('Should sectionContent() even if there is no data', () => {
    const sectionContentData = sectionContent();
    expect(sectionContentData.component).toBe('');
    expect(sectionContentData.title).toBe('');
    expect(sectionContentData.html).toBe('');
    expect(sectionContentData.background).toBe(false);
  });

  it('Should sectionContent() return a valid data', () => {
    const sectionContentData = sectionContent(mockSectionContent);
    expect(sectionContentData.component).toBe(mockSectionContent.__component);
    expect(sectionContentData.title).toBe(mockSectionContent.title);
    expect(sectionContentData.html).toBe(mockSectionContent.content);
    expect(sectionContentData.background).toBe(
      mockSectionContent.metadata.background
    );
  });

  it('Should mapTextGrid() even if there is no data', () => {
    const sectionContentData = mapTextGrid();
    expect(sectionContentData.component).toBe('');
    expect(sectionContentData.title).toBe('');
    expect(sectionContentData.description).toBe('');
    expect(sectionContentData.background).toBe(false);
  });

  it('Should mapTextGrid() return a valid data', () => {
    const sectionContentData = mapTextGrid(mockSectionGrid);
    expect(sectionContentData.component).toBe(mockSectionGrid.__component);
    expect(sectionContentData.title).toBe(mockSectionGrid.title);
    expect(sectionContentData.description).toBe(mockSectionGrid.description);
    expect(sectionContentData.background).toBe(
      mockSectionGrid.metadata.background
    );
  });

  it('Should mapImageGrid() even if there is no data', () => {
    const sectionContentData = mapImageGrid();
    expect(sectionContentData.component).toBe('');
    expect(sectionContentData.title).toBe('');
    expect(sectionContentData.description).toBe('');
    expect(sectionContentData.background).toBe(false);
  });

  it('Should mapImageGrid() return a valid data', () => {
    const sectionContentData = mapImageGrid(mockSectionGrid);
    expect(sectionContentData.component).toBe(mockSectionGrid.__component);
    expect(sectionContentData.title).toBe(mockSectionGrid.title);
    expect(sectionContentData.description).toBe(mockSectionGrid.description);
    expect(sectionContentData.background).toBe(
      mockSectionGrid.metadata.background
    );
  });
});
