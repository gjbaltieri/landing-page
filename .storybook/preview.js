import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/style/globalstyle';
import { theme } from '../src/style/theme';

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    light: '#F2F2F2',
    dark: '#333333',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Storie) => (
    <ThemeProvider theme={theme}>
      <Storie />
      <GlobalStyles />
    </ThemeProvider>
  ),
];
