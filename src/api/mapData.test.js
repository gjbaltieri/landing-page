import { mapData } from './mapData';

describe('Api data suite tests', () => {
  it('Should mapData even if there is no data', () => {
    const [pageData] = mapData();
    expect(pageData.title).toBe('');
    expect(pageData.slug).toBe('');
    expect(pageData.menu_link).toEqual([]);
    expect(pageData.menu).toEqual({});
    expect(pageData.sections).toEqual([]);
    expect(pageData.footer_HTML).toBe('');
  });

  it('Should mapData return a data', () => {
    const [pageData] = mapData([
      {
        menu: { a: 'b' },
        menu_link: [1, 2, 3],
        title: 'title_1',
        slug: 'slug_1',
        sections: ['a', 'b', 'c'],
        footer_text: 'footer_text_1',
      },
    ]);
    expect(pageData.menu).toEqual({ a: 'b' });
    expect(pageData.menu_link).toEqual([1, 2, 3]);
    expect(pageData.slug).toBe('slug_1');
    expect(pageData.title).toBe('title_1');
    expect(pageData.sections).toEqual(['a', 'b', 'c']);
    expect(pageData.footer_HTML).toBe('footer_text_1');
  });
});
