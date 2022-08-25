import { Name, UserDetails, UserInfo } from './style';

interface Prop {
  date: string;
  img: string;
  name: string;
  background: boolean;
}

const UserInfoCard = ({ date, img, name, background }: Prop) => {
  return (
    <UserInfo background={background}>
      <span>{date}</span>
      <UserDetails>
        <img src={img} alt="user" />
        <Name>{name}</Name>
      </UserDetails>
    </UserInfo>
  );
};

export default UserInfoCard;
