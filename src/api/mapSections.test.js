import { sectionTwoColumns, sectionContent, sectionGrid } from './mapSections';

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
    expect(sectionContentData.content).toBe('');
    expect(sectionContentData.background).toBe(false);
  });

  it('Should sectionContent() return a valid data', () => {
    const sectionContentData = sectionContent(mockSectionContent);
    expect(sectionContentData.component).toBe(mockSectionContent.__component);
    expect(sectionContentData.title).toBe(mockSectionContent.title);
    expect(sectionContentData.content).toBe(mockSectionContent.content);
    expect(sectionContentData.background).toBe(
      mockSectionContent.metadata.background
    );
  });
});
