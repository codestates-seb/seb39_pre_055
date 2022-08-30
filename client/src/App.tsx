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
import Tags from './pages/Tags/Tags';
import Users from './pages/Users/Users';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<QuestionList />} />
          <Route path="/:id" element={<QuestionDetail />} />
          <Route path="/:id/edit" element={<EditQuestion />} />
          <Route path="/ask" element={<AskQuestion />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/users" element={<Users />} />
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
