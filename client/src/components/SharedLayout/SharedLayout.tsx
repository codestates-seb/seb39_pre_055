import Footer from './Footer/Footer';
import Main from './Main/Main';
import Nav from './Nav/Nav';

const SharedLayout = () => {
  return (
    <>
      <Nav />
      <Main />
      <Footer>footer</Footer>
    </>
  );
};

export default SharedLayout;
