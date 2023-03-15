import React from 'react';
import ReactDOM from 'react-dom/client';
import './noPadding.css';
import reportWebVitals from './reportWebVitals';
import Heading from './components/Header/Heading';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/style/theme';
import { GlobalStyle } from './style/globalstyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Heading />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
