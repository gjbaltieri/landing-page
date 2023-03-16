import { links } from '../../components/NavLinks/mocklinks';
import GridText from '../../components/GridText/GridText';
import GridMock from '../../components/GridText/mock-GridText';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  children: (
    <>
      <GridText {...GridMock} background />
      <GridText {...GridMock} />
      <GridText {...GridMock} background />
    </>
  ),
  logoData: {
    text: 'Logo',
    link: '#',
  },
  links: links,
  footerHTML:
    '<p><a href="http://instagram.com/gjbaltieri">@gjbaltieri</a></p>',
};
