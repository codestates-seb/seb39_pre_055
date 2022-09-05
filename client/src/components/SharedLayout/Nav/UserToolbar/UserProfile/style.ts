import styled, { css } from 'styled-components';

import { BlueButton } from '../../../../Button/Templates';

export const UserProfileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 100%;
  font-size: 0.8rem;
`;

export const UserIconBox = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 10px;
  overflow: hidden;
`;

interface UserIconProps {
  userImg: string | undefined;
}

export const UserIconButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;

  ${({ userImg }: UserIconProps) => css`
    background-image: url(${userImg});
    background-size: contain;
  `}
`;
export const UserRepSpan = styled.span`
  padding: 3px;
`;

export const SProfileBox = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  row-gap: 10px;
  top: 105%;
  width: 180px;
  height: 220px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 5px grey;
  color: var(--black-600);
`;

export const SImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 30px;
`;

export const SUserNameH3 = styled.h3`
  font-weight: revert;
`;

export const LogoutButton = styled(BlueButton)`
  margin-top: 10px;
`;
