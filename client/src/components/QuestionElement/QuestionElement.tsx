import styled from 'styled-components';

import Tag from '../Tag/Tag';
import LeftCounts from './LeftCounts/LeftCounts';
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
  margin: 0px 10px 0px 200px;
  font-size: 8px;
  img {
    margin-right: 5px;
  }
`;

const QuestionElement = ({ userName, title, contents }: Prop) => {
  return (
    <Container>
      <QuestionTitle title="(Front-End) on-click change image to the n-th image" />
      <QuestionContents contents="I currently have a page with thumbnails of images on the left side below the sidebar which you can click on to change the image shown in the container for the main content." />
      <ContentFooter>
        <Tags>
          <Tag name="javascript" />
          <Tag name="json" />
          <Tag name="html" />
        </Tags>
        <UserContainer>
          <img
            width="23"
            alt="스크린샷 2022-08-26 오전 1 31 23"
            src="https://user-images.githubusercontent.com/104320234/186720336-2208d3db-cfa4-4145-b9f4-48029e4672e0.png"
          />
          <span id={userName}>{userName}</span>
          <span> lastUpdate 4 days ago</span>
        </UserContainer>
      </ContentFooter>
    </Container>
  );
};

export default QuestionElement;
