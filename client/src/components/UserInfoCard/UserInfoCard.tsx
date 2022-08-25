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
      <span>{date}</span>
      <UserDetails>
        <img src={img} alt="user" />
        <Name>{name}</Name>
      </UserDetails>
    </UserInfo>
  );
};

export default UserInfoCard;
