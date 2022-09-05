import { useState } from 'react';

import { useAppSelector } from '../../../../../redux';
import {
  UserIconBox,
  UserIconButton,
  UserProfileBox,
  UserRepSpan,
} from './style';
import ProfileCard from './UserProfileCard';

interface UserProfileProps {
  userRep?: number;
}

const UserProfile = ({ userRep = 1 }: UserProfileProps) => {
  const [openCard, setOpencard] = useState(false);
  const { image } = useAppSelector((state) => state.user.user) || {};

  return (
    <UserProfileBox>
      <UserIconBox>
        <UserIconButton
          userImg={image}
          className="user-button"
          onClick={() => setOpencard((prev) => !prev)}
        />
      </UserIconBox>
      {openCard && <ProfileCard setOpencard={setOpencard} />}
      <UserRepSpan>{userRep}</UserRepSpan>
    </UserProfileBox>
  );
};

export default UserProfile;
