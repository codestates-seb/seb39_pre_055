import IconImg from '../../../../../assets/img/userIcon.png';
import { UserIconBox, UserIconImg, UserProfileBox, UserRepSpan } from './style';

interface UserProfileProps {
  userIcon?: string;
  userRep?: number;
}

const UserProfile = ({ userIcon = IconImg, userRep = 1 }: UserProfileProps) => {
  return (
    <UserProfileBox>
      <UserIconBox>
        <UserIconImg src={userIcon} alt="user icon" />
      </UserIconBox>
      <UserRepSpan>{userRep}</UserRepSpan>
    </UserProfileBox>
  );
};

export default UserProfile;
