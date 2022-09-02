import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { User } from '../../types/question';
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
  contents: string;
  title: string;
  questionId: number;
  user: User;
  tagList: Array<string>;
  createdAt: string;
}

const QuestionElement = ({
  user,
  title,
  contents,
  questionId,
  tagList,
  createdAt,
}: Prop) => {
  return (
    <Container>
      <STitleLink to={`/${questionId}`}>{title}</STitleLink>
      <STextP>{contents}</STextP>
      <ContentFooter>
        <Tags>
          {tagList.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </Tags>
        <UserContainer>
          <img width="20" alt={`thumbnail of ${user}`} src={user.image} />
          <UserName>{user.displayName}</UserName>
          <UserAsked> {createdAt}</UserAsked>
        </UserContainer>
      </ContentFooter>
    </Container>
  );
};

export default QuestionElement;
