import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import GlobalStyle from './assets/style/GlobalStyle';
import { theme } from './assets/style/Theme';
import { setupStore } from './redux';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={setupStore()}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
