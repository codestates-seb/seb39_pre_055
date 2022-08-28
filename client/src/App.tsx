import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { SharedLayout } from './components';
import {
  AskQuestion,
  EditQuestion,
  QuestionDetail,
  QuestionList,
} from './pages';
import Search from './pages/Search/Search';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Landing</div>} />
        <Route path="/questions" element={<SharedLayout />}>
          <Route index element={<QuestionList />} />
          <Route path="/questions/:id" element={<EditQuestion />} />
          <Route path="/questions/ask" element={<AskQuestion />} />
          <Route path="/questions/tags" element={<AskQuestion />} />
          <Route path="/questions/users" element={<QuestionDetail />} />
          <Route path="/questions/company" element={<EditQuestion />} />
        </Route>
        <Route path="/search/*" element={<SharedLayout />}>
          <Route index element={<Search />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" pauseOnFocusLoss theme="colored" />
    </BrowserRouter>
  );
};

export default App;
