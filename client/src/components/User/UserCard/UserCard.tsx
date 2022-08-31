import { formatNumber } from '../../../utils';
import {
  Badge,
  BadgeContainer,
  Card,
  Location,
  Name,
  Reputation,
  UserInfo,
} from './style';

interface Prop {
  img: string;
  link: string;
  name: string;
  location?: string;
  reputation: number;
  gold: number;
  silver: number;
  bronze: number;
}

const UserCard = (props: Prop) => {
  const { img, link, name, location, reputation, gold, silver, bronze } = props;
  return (
    <Card>
      <img src={img} alt="user" />
      <UserInfo>
        <a href={link} target="_blank" rel="noreferrer">
          <Name>{name}</Name>
        </a>
        {location && <Location>{location}</Location>}
        <BadgeContainer>
          <Reputation>{formatNumber(reputation)}</Reputation>
          <Badge type="gold">
            <div />
            <span>{formatNumber(gold)}</span>
          </Badge>
          <Badge type="silver">
            <div />
            <span>{formatNumber(silver)}</span>
          </Badge>
          <Badge type="bronze">
            <div />
            <span>{formatNumber(bronze)}</span>
          </Badge>
        </BadgeContainer>
      </UserInfo>
    </Card>
  );
};

export default UserCard;
