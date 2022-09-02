/* eslint-disable react/display-name */
import { memo } from 'react';

import { getQInfos, useAppSelector } from '../../redux';
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
}

const UserFooter = memo(({ id }: Prop) => {
  const { user, createdAt } = useAppSelector((state) => getQInfos(state, id));

  return (
    <UserContainer>
      <img width="20" alt={`thumbnail of ${user}`} src={user.image} />
      <UserName>{user.displayName}</UserName>
      <UserAsked> {createdAt}</UserAsked>
    </UserContainer>
  );
});

const QuestionElement = ({ id }: Prop) => {
  const { title, body, questionTags } = useAppSelector((state) =>
    getQInfos(state, id)
  );

  return (
    <Container>
      <STitleLink to={`/${id}`}>{title}</STitleLink>
      <STextP>{body}</STextP>
      <ContentFooter>
        <Tags>
          {questionTags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </Tags>
        <UserFooter id={id} />
      </ContentFooter>
    </Container>
  );
};

export default QuestionElement;
