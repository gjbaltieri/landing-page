import 'jest-styled-components';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderTheme from '../../style/renderTheme';
import Base from './Base';
import BaseMock from '../Base/BaseMock';

describe('<Base/>', () => {
  test('should render Base with default values', () => {
    const { container } = renderTheme(<Base {...BaseMock} />);
    expect(container).toMatchSnapshot();
  });
});
