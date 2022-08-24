import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ReactComponent as Sprites } from './assets/img/sprites.svg';
import { SharedLayout } from './components';
import { AskQuestion, QuestionDetail, QuestionList } from './pages';
const test = "test"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Landing</div>} />
        <Route path="/questions" element={<SharedLayout />}>
          <Route index element={<QuestionList />} />
          <Route path="/questions/:id" element={<QuestionDetail />} />
          <Route path="/questions/ask" element={<AskQuestion />} />
          <Route path="/questions/tags" element={<AskQuestion />} />
          <Route path="/questions/users" element={<QuestionDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
