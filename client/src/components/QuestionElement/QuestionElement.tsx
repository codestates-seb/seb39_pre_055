/* eslint-disable react/display-name */
import { memo } from 'react';

import { useAppSelector } from '../../redux';
import { getDateToString } from '../../utils';
import Tag from '../Tag/Tag';
import {
  Container,
  ContentFooter,
  STextP,
  STitleLink,
  Tags,
  UserAsked,
  UserContainer,
  UserName,
} from './style';

interface Prop {
  id: number;
  selector: any;
}
const UserFooter = memo(({ id, selector }: Prop) => {
  const { user, createdAt } =
    useAppSelector((state) => selector(state, id)) || {};

  return (
    <UserContainer>
      <img width="20" alt={`thumbnail of ${user}`} src={user?.image} />
      <UserName>{user?.displayName}</UserName>
      <UserAsked> {`asked ${getDateToString(createdAt)}`}</UserAsked>
    </UserContainer>
  );
});

const QuestionElement = ({ id, selector }: Prop) => {
  const { title, body, questionTags } = useAppSelector((state) =>
    selector(state, id)
  );

  return (
    <Container>
      <STitleLink to={`/${id}`}>{title}</STitleLink>
      <STextP>{body}</STextP>
      <ContentFooter>
        <Tags>
          {(questionTags || []).map((tag: any) => (
            <Tag key={tag} name={tag} />
          ))}
        </Tags>
        <UserFooter id={id} selector={selector} />
      </ContentFooter>
    </Container>
  );
};

export default QuestionElement;
