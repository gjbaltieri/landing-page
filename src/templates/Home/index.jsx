import { useEffect, useState } from 'react';
import Base from '../Base/Base';
import { mapData } from '../../api/mapData';
import Grid from '../../components/Grid/Grid';
import GridImage from '../../components/GridImage/GridImage';
import GridText from '../../components/GridText/GridText';

function Home() {
  const [apiResponseData, setApiResponseData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetch(
          'http://localhost:1337/api/pages?sluge=pagina-1&populate[0]=sections&populate[1]=sections&populate[2]=sections.image&populate[3]=sections.metadata&populate[4]=sections.image_grid.image&populate[5]=sections.text_grid&populate[6]=menu&populate[7]=menu.menu_link'
        );
        const json = await data.json();
        const [apiData] = mapData(json.data);
        setApiResponseData(apiData);
      } catch (error) {
        console.error('deu ruim', error);
        setApiResponseData(undefined);
      }
    };
    loadData();
  }, []);
  if (apiResponseData === undefined) {
    return <h1>Pagina não encontrada</h1>;
  }

  if (apiResponseData && !apiResponseData.slug) {
    return <h1>Carregando...</h1>;
  }
  const { sections } = apiResponseData;
  return (
    <Base
      footerHTML={apiResponseData.footer_HTML}
      links={apiResponseData.menu.links}
      logoData={apiResponseData.menu}
    >
      {sections.map((section) => {
        const { component } = section;
        if (component === 'section.section-grid-text') {
          return <GridText {...section} />;
        }
        if (component === 'section.section-two-columns') {
          return <Grid {...section} />;
        }
        if (component === 'section.section-grid-image') {
          return <GridImage {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;
