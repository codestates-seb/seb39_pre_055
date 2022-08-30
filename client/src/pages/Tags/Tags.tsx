import { useEffect } from 'react';
import styled from 'styled-components';

import { SearchBar, Tag } from '../../components';

const Container = styled.div`
  padding: 24px;
  border-left: 1px solid rgb(227, 230, 232);

  h1 {
    margin-bottom: 16px;
    color: rgb(35, 38, 41);
    font-size: 27px;
  }
`;

const SHeader = styled.header`
  margin-bottom: 16px;
  color: rgb(35, 38, 41);

  h1 {
    margin-bottom: 16px;
    font-size: 27px;
  }

  p {
    font-size: 15px;
    line-height: 20px;
  }
`;

export const FilterContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const SearchBarContainer = styled.div`
  margin-left: -10px;
  width: 200px;
`;

export const TagsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 16px;

  div {
    padding: 12px;
    border: 1px solid rgb(227, 230, 232);

    & > span {
      display: block;
      margin-top: 20px;
      margin-left: 2px;
      color: rgb(131, 140, 149);
      font-size: 12px;
    }
  }

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 980px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (min-width: 1265px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const Tags = () => {
  // const [tags, setTags] = useState([]);

  // const fetch = async () => {
  //   const res = await axios.get(
  //     'https://api.stackexchange.com/2.3/tags?page=1&pagesize=48&order=desc&sort=popular&site=stackoverflow'
  //   );
  //   setTags(res.data);
  //   console.log(res.data);
  // };

  // useEffect(() => {
  //   fetch();
  // }, []);
  return (
    <Container>
      <SHeader>
        <h1>Tags</h1>
        <p>
          A tag is a keyword or label that categorizes your question with other,
          similar questions.
          <br />
          Using the right tags makes it easier for others to find and answer
          your question.
        </p>
      </SHeader>
      <FilterContainer>
        <SearchBarContainer>
          <SearchBar placeholder="Filter by tag name" />
        </SearchBarContainer>
        <div>
          <button type="button">Popular</button>
          <button type="button">Name</button>
          <button type="button">New</button>
        </div>
      </FilterContainer>
      <TagsContainer>
        <div>
          <Tag name="javascript" />
          <span>2416606 questions</span>
        </div>
      </TagsContainer>
    </Container>
  );
};

export default Tags;
