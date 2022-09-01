import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { User } from '../../types/question';
import Tag from '../Tag/Tag';
import QuestionContents from './QuestionContents/QuestionContents';
import QuestionTitle from './QuestionTitle/QuestionTitle';

interface Prop {
  contents: string;
  title: string;
  user: User;
  tagList: Array<{ tagName: string }>;
  createdAt: string;
}

const Container = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

const ContentFooter = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-right: 23px;
`;

const Tags = styled.span`
  display: flex;
  @media (max-width: 640px) {
    margin-bottom: 5px;
  }
`;

const UserContainer = styled.span`
  display: flex;
  align-items: center;
  margin: 0px 20px 0px auto;
  font-size: 12px;

  justify-content: space-between;
  flex-wrap: wrap;

  img {
    margin: 5px 5px 5px 0px;
  }
  span {
    margin-right: 5px;
  }
  @media (max-width: 640px) {
  }
`;

const UserName = styled.span`
  color: var(--blue-600);
  width: auto;
`;

const UserAsked = styled.span`
  color: var(--black-600);
`;

const QuestionElement = ({
  user,
  title,
  contents,
  tagList,
  createdAt,
}: Prop) => {
  return (
    <Container>
      <QuestionTitle title={title} />
      <QuestionContents
        contents={contents}
        txt=""
        limitLength={182}
        lastTxt="..."
      />
      <ContentFooter>
        <Tags>
          {tagList.map((tag) => (
            // 나중에 수정해야 함
            <Tag key={tag.tagName} name={tag.tagName} />
          ))}
        </Tags>
        <UserContainer>
          <img width="20" alt="user" src={user.image} />
          <UserName>{user.displayName}</UserName>
          <UserAsked> {createdAt}</UserAsked>
        </UserContainer>
      </ContentFooter>
    </Container>
  );
};

export default QuestionElement;
