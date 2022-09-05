import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { NotFound, SharedLayout } from './components';
import {
  AskQuestion,
  EditQuestion,
  Login,
  Logout,
  QuestionDetail,
  QuestionList,
  Signup,
} from './pages';
import Search from './pages/Search/Search';
import Tags from './pages/Tags/Tags';
import Users from './pages/Users/Users';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<QuestionList />} />
          <Route path="/:id" element={<QuestionDetail />} />
          <Route path="/:id/edit" element={<EditQuestion />} />
          <Route path="/ask" element={<AskQuestion />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/search/*" element={<SharedLayout />}>
          <Route index element={<Search />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" pauseOnFocusLoss theme="colored" />
    </>
  );
};

export default App;
