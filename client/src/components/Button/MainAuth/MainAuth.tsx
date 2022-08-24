import { Link } from 'react-router-dom';

import { BlueBtn } from '../style';
import { AuthBtns } from './style';

const MainAuth = () => {
  return (
    <AuthBtns>
      <Link to="/login">
        <BlueBtn type="button" color="blue" mainCode="500">
          Log in
        </BlueBtn>
      </Link>
      <Link to="/signup">
        <BlueBtn type="button" color="powder" mainCode="300">
          Sign up
        </BlueBtn>
      </Link>
    </AuthBtns>
  );
};

export default MainAuth;
