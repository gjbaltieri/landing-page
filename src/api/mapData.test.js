import { mapData } from './mapData';

describe('Api data suite tests', () => {
  it('Should mapData even if there is no data', () => {
    const [pageData] = mapData();
    expect(pageData.title).toBe('');
    expect(pageData.slug).toBe('');
    expect(pageData.footer_HTML).toBe('');
  });

  it('Should mapData return a data', () => {
    const [pageData] = mapData([
      {
        title: 'title_1',
        slug: 'slug_1',
        footer_text: 'footer_text_1',
      },
    ]);
    expect(pageData.slug).toBe('slug_1');
    expect(pageData.title).toBe('title_1');
    expect(pageData.footer_HTML).toBe('footer_text_1');
  });
});
