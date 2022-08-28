import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Tag from '../Tag/Tag';
import QuestionContents from './QuestionContents/QuestionContents';
import QuestionTitle from './QuestionTitle/QuestionTitle';

interface Prop {
  contents: string;
  title: string;
  userName: string;
}

const Container = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  width: 100%;
  height: auto;
`;

const ContentFooter = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 23px;
`;

const Tags = styled.span`
  display: flex;
  margin-top: 7px;
  margin-bottom: 15px;
`;

const UserContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0px 20px 0px 200px;
  font-size: 11.3px;
  img {
    margin-right: 5px;
  }
  span {
    margin-right: 5px;
    margin-top: 5px;
  }
`;
// QuestionContents 마크다운으로 넘겨줘야함
const QuestionElement = ({ userName, title, contents }: Prop) => {
  return (
    <Container>
      <QuestionTitle title="(Front-End) on-click change image to the n-th image" />
      <QuestionContents
        contents="I currently have a page with thumbnails of images on the left side below the sidebar which you can click on to change the image shown in the container for the main content. 1234567891011121314151617181920"
        txt=""
        limitLength={182}
        lastTxt="..."
      />
      <ContentFooter>
        <Tags>
          <Tag name="javascript" />
          <Tag name="json" />
          <Tag name="html" />
        </Tags>
        <UserContainer>
          <img
            width="20"
            alt="스크린샷 2022-08-26 오전 1 31 23"
            src="https://user-images.githubusercontent.com/104320234/186720336-2208d3db-cfa4-4145-b9f4-48029e4672e0.png"
          />
          <span id={userName}>{userName}</span>
          <span> asked 4 days ago</span>
        </UserContainer>
      </ContentFooter>
    </Container>
  );
};

export default QuestionElement;
