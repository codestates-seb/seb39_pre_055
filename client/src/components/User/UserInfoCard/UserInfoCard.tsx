import { getDateToString } from '../../../utils';
import { Name, UserDetails, UserInfo } from './style';

interface Prop {
  date: string;
  img: string;
  name: string;
  type: 'question' | 'answer';
}
const UserInfoCard = ({ date, img, name, type }: Prop) => {
  return (
    <UserInfo type={type}>
      <span>{getDateToString(date)}</span>
      <UserDetails>
        <img src={img} alt="user" />
        <Name>{name}</Name>
      </UserDetails>
    </UserInfo>
  );
};

export default UserInfoCard;
