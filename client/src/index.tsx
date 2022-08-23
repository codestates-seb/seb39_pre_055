import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// import { worker } from './__mocks__';
import App from './App';
import GlobalStyle from './assets/style/GlobalStyle';
import { store } from './redux';

// 이후 해결
// if (process.env.NODE_ENV === 'development') {
//   worker.start();
// }

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);
