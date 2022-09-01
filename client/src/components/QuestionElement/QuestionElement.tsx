import styled from 'styled-components';

import { User } from '../../types/question';
import Tag from '../Tag/Tag';
import QuestionContents from './QuestionContents/QuestionContents';
import QuestionTitle from './QuestionTitle/QuestionTitle';

interface Prop {
  contents: string;
  title: string;
  questionId: number;
  user: User;
  tagList: Array<{ tagName: string }>;
  createdAt: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  width: 100%;
  height: auto;
`;

const ContentFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-right: 23px;
`;

const Tags = styled.div`
  display: flex;
  @media (max-width: 640px) {
    margin-bottom: 5px;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 20px 0px auto;
  font-size: 12px;

  justify-content: space-between;
  flex-wrap: wrap;

  img {
    margin: 5px 5px 5px 0px;
  }
  div {
    margin-right: 5px;
  }
  @media (max-width: 640px) {
  }
`;

const UserName = styled.div`
  color: var(--blue-600);
  width: auto;
`;

const UserAsked = styled.div`
  color: var(--black-600);
`;

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
      <QuestionTitle title={title} questionId={questionId} />
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
