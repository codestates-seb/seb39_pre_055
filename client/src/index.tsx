import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// import { worker } from './__mocks__';
import App from './App';
import GlobalStyle from './assets/style/GlobalStyle';
import { theme } from './assets/style/Theme';
import { setupStore } from './redux';

// 이후 해결
// if (process.env.NODE_ENV === 'development') {
//   worker.start();
// }

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={setupStore()}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
