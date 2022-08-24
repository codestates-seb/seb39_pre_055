import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ReactComponent as Sprites } from './assets/img/sprites.svg';
import { SharedLayout } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/questions"
            element={<div>{'Lorem Ipsum'.repeat(200)}</div>}
          />
          <Route
            path="/tags"
            element={
              <div>
                <Sprites />
              </div>
            }
          />
          <Route path="/users" element={<div>users</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
