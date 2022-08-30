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

// QuestionContents 마크다운으로 넘겨줘야함
const QuestionElement = ({ userName, title, contents }: Prop) => {
  // function App() {
  //   const [posts, setPosts] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [postsPerPage, setPostsPerPage] = useState(10);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setLoading(true);
  //       const response = await axios.get(
  //         'https://'// url
  //       );
  //       setPosts(response.data);
  //       setLoading(false);
  //     };
  //     fetchData();
  //   }, []);
  //   // console.log(posts);
  // }

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
          <UserName>{userName}</UserName>
          <UserAsked> asked 4 days ago</UserAsked>
        </UserContainer>
      </ContentFooter>
    </Container>
  );
};

export default QuestionElement;
