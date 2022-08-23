import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SharedLayout from './components/SharedLayout/SharedLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/questions" element={<div>questions</div>} />
          <Route path="/tags" element={<div>tags</div>} />
          <Route path="/users" element={<div>users</div>} />
          <Route path="/login" element={<div>login</div>} />
          <Route path="/signup" element={<div>signup</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
