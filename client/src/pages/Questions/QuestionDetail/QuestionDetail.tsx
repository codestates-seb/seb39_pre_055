import styled from 'styled-components';

import { Tag, Triangle } from '../../../components';

const Container = styled.div`
  padding: 24px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  h1 {
    font-size: 27px;
    color: var(--black-700);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  padding-bottom: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--black-100);

  div {
    margin-bottom: 8px;
    margin-right: 16px;
    font-size: 13px;
  }

  span {
    margin-right: 2px;
    color: var(--black-500);
  }

  strong {
    color: var(--black-800);
  }
`;

const MainContents = styled.div`
  border: 1px solid blue;
  display: flex;
  height: 500px;
`;

const Votes = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding-right: 16px;

  div {
    margin: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    font-size: 21px;
    color: var(--black-500);
  }
`;

const TextArea = styled.div`
  border: 1px solid red;
  flex-grow: 1;
  font-size: 15px;

  p {
    margin-bottom: 16.5px;
  }
`;

const Tags = styled.div`
  margin: 24px 0;
`;

const QuestionDetail = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>Stop an array while finding string</h1>
        <button type="button">Ask Question</button>
      </TitleContainer>
      <InfoContainer>
        <div>
          <span>Asked </span>
          <strong>today</strong>
        </div>
        <div>
          <span>Modified </span>
          <strong>today</strong>
        </div>
        <div>
          <span>Viewed </span>
          <strong>5 times</strong>
        </div>
      </InfoContainer>
      <MainContents>
        <Votes>
          <Triangle />
          <div>
            <span>0</span>
          </div>
          <Triangle rotate="180deg" />
        </Votes>
        <TextArea>
          <p>This is my array</p>
          <p>
            Cyan Color | Magenta Color | Yellow Color | Cut Technical |
            Information Technical | Pink Color | Lila Color | White Color
          </p>
          <p>
            Cyan Color | Magenta Color | Yellow Color | Cut Technical |
            Information Technical | Pink Color | Lila Color | White Color
          </p>
          <p>I only need the information before the Technical:</p>
          <p>Cyan Color | Magenta Color | Yellow Color | Cut Technical</p>
          <p>or:</p>
          <p>
            Cyan Color | Magenta Color | Yellow Color | Cut Technical |
            Information Technical
          </p>
          <Tags>
            <Tag name="javascript" />
            <Tag name="arrays" />
            <Tag name="string" />
          </Tags>
        </TextArea>
      </MainContents>
    </Container>
  );
};

export default QuestionDetail;
