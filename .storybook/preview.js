import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/style/globalstyle';
import { theme } from '../src/style/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    light: '#feefff',
    dark: '#0D0D0D',
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
      {Storie()}
      <GlobalStyle />
    </ThemeProvider>
  ),
];
