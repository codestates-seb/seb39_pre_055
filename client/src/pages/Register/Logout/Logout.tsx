/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom';

import { BlueButton } from '../../../components';
import { LINK_DATA } from '../../../constants';
import { logOutUser, useAppDispatch } from '../../../redux';
import {
  ButtonContainer,
  Checkbox,
  Container,
  LinkList,
  LogoutCard,
  TextContainer,
} from './style';

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logOutUser());
    navigate('/');
  };
  const handleCancel = () => {
    navigate(-1);
  };
  return (
    <Container>
      <TextContainer>
        <p>
          Clicking "log out" will log you out of the following domains on this
          device:
        </p>
      </TextContainer>
      <LogoutCard>
        <LinkList>
          {LINK_DATA.map((link) => (
            <li key={link.img}>
              <img src={link.img} alt="logo" />
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.href.slice(8)}
              </a>
            </li>
          ))}
        </LinkList>
        <Checkbox>
          <input type="checkbox" id="logout" />
          <label htmlFor="logout">Log out on all devices</label>
        </Checkbox>
        <ButtonContainer>
          <BlueButton width="70px" height="35px" onClick={handleLogout}>
            Log out
          </BlueButton>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </ButtonContainer>
        <p>
          if you're on a shared computer, remember to log out of your Open ID
          provider (Facebook, Google, Stack Exchange, etc.) as well.
        </p>
      </LogoutCard>
    </Container>
  );
};

export default Logout;
