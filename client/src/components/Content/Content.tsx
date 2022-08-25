import styled from 'styled-components';

import { Tag, Triangle, UserInfoCard } from '../index';

const MainContents = styled.main`
  display: flex;
  margin-top: 16px;
  border-bottom: 1px solid rgb(227, 230, 232);
`;

const Votes = styled.aside`
  display: flex;
  flex-direction: column;
  padding-right: 16px;

  span {
    margin: 20px 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 21px;
    color: var(--black-500);
  }
`;

const TextArea = styled.section`
  flex-grow: 1;
  font-size: 15px;
  font-weight: 500;
  line-height: 22.5px;
  p {
    margin-bottom: 16.5px;
  }
`;

const Tags = styled.section`
  margin: 24px 0;
`;

const Utils = styled.section`
  display: flex;
  justify-content: space-between;
  height: 70px;
  margin: 16px 0;

  button {
    border: none;
    background-color: inherit;
    color: rgb(106, 115, 124);
    font-size: 13px;
  }
`;

const url = 'https://graph.facebook.com/1616279655126812/picture?type=large';
const text1 =
  "Hi so I'm trying to learn javascript from scratch and I have this code working, its just really ugly. Can anyone tell me how I should have made this into a function? Constantly using 'let' is going to make a huge mess for me to untangle later.";
const text2 =
  "As you can see i am just naming a new variable for each step of the way and I'm pretty sure I could be doing this easier... I have stuff like this all throughout my code so I don't really need a fix specific to the above just in a wider since how do I package this stuff into a single function.";

interface Prop {
  background: boolean;
}

const Content = ({ background }: Prop) => {
  return (
    <MainContents>
      <Votes>
        <Triangle />
        <span>0</span>
        <Triangle rotate="180deg" />
      </Votes>
      <TextArea>
        <p>{text1}</p>
        <p>{text2}</p>
        <Tags>
          {['javascript', 'arrays', 'string'].map((name) => (
            <Tag key={name} name={name} />
          ))}
        </Tags>
        <Utils>
          <div>
            <button type="button">Share</button>
            <button type="button">Edit</button>
            <button type="button">Follow</button>
          </div>
          <UserInfoCard
            date="asked 2 mins ago"
            img={url}
            name="Damian Kowalski"
            background={background}
          />
        </Utils>
      </TextArea>
    </MainContents>
  );
};

export default Content;
