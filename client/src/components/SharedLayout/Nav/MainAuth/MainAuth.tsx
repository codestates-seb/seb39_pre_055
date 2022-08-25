import { Link } from 'react-router-dom';

import { BlueButton, PowderButton } from '../../../Button/Templates';
import { AuthBtns } from './style';

const MainAuth = () => {
  return (
    <AuthBtns>
      <Link to="/questions">
        <PowderButton>Log in</PowderButton>
      </Link>
      <Link to="/signup">
        <BlueButton>Sign up</BlueButton>
      </Link>
    </AuthBtns>
  );
};

export default MainAuth;