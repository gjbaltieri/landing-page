import 'jest-styled-components';
import '@testing-library/jest-dom';
import renderTheme from '../../style/renderTheme';
import SectionBackground from './SectionBackground';

describe('<SectionBackground/>', () => {
  test('should render SectionBackground with background dark', () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>
        <h1>Children</h1>
      </SectionBackground>
    );
    expect(container).toMatchSnapshot();
  });

  test('should render SectionBackground with background white', () => {
    const { container } = renderTheme(
      <SectionBackground background={false}>
        <h1>Children</h1>
      </SectionBackground>
    );
    expect(container).toMatchSnapshot();
  });
});
