import styled from 'styled-components';

const SHeader = styled.header`
  margin-bottom: 16px;
  color: rgb(35, 38, 41);

  h1 {
    margin-bottom: 16px;
    font-size: 27px;
  }

  p {
    margin-bottom: 16px;
    font-size: 15px;
    line-height: 20px;
  }

  a {
    & > p {
      color: #0074cc;
      font-size: 13px;
    }
  }
`;

const TagHeader = () => {
  return (
    <SHeader>
      <h1>Tags</h1>
      <p>
        A tag is a keyword or label that categorizes your question with other,
        similar questions.
        <br />
        Using the right tags makes it easier for others to find and answer your
        question.
      </p>
      <a href="https://stackoverflow.com/tags/synonyms" target="_block">
        <p>Show all tag synonyms</p>
      </a>
    </SHeader>
  );
};

export default TagHeader;
