import { render } from '@testing-library/react';
import { GlobalStyle } from './globalstyle';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
export default function renderTheme(children) {
  return render(
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
}
