import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Prop {
  icon: string;
  text: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--black-700);
  font-weight: 600;
`;

const Info1 = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  span {
    margin-left: 7px;
    font-size: 15px;
  }
  img {
    pading-top: 15px;
  }
`;

const Info2 = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  span {
    margin-left: 7px;
    font-size: 15px;
  }
`;

const Info3 = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  span {
    margin-left: 7px;
    font-size: 15px;
  }
`;

const Info4 = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  span {
    margin-left: 7px;
    font-size: 15px;
  }
`;

const Footer = styled.div`
  font-size: 13px;
  font-weight: 600;
  line-height: 17px;
  color: var(--black-400);
`;

const GetTeams = styled.div`
  color: var(--blue-600);
`;

const SignupSideInfo = ({ icon, text }: Prop) => {
  const nav = useNavigate();
  return (
    <Wrapper>
      <Info1>
        <img
          width="24"
          alt="스크린샷 2022-09-03 오후 8 49 23"
          src="https://user-images.githubusercontent.com/104320234/188269169-bf7b987f-e597-46cd-a8e7-c227efde5679.png"
        />
        <span>Get unstuck — ask a question</span>
      </Info1>
      <Info2>
        <img
          width="24"
          alt="스크린샷 2022-09-03 오후 8 49 56"
          src="https://user-images.githubusercontent.com/104320234/188269240-b38cf6ed-34c3-43eb-b63c-51d9619ade19.png"
        />
        <span>Unlock new privileges like voting and commenting</span>
      </Info2>
      <Info3>
        <img
          width="27"
          alt="스크린샷 2022-09-03 오후 8 50 14"
          src="https://user-images.githubusercontent.com/104320234/188269297-ff59ed55-4627-49f3-a001-9e480ff2bc7d.png"
        />
        <span>Save your favorite tags, filters, and jobs</span>
      </Info3>
      <Info4>
        <img
          width="23"
          alt="스크린샷 2022-09-03 오후 8 50 42"
          src="https://user-images.githubusercontent.com/104320234/188269328-d049a0e0-6514-4ea6-b207-d5f58d02e943.png"
        />
        <span>Earn reputation and badges</span>
      </Info4>
      <Footer>
        <div>
          Collaborate and share knowledge with a private group for FREE.
        </div>
        <GetTeams
          onClick={() =>
            nav(
              'https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up'
            )
          }
        >
          Get Stack Overflow for Teams free for up to 50 users.
        </GetTeams>
      </Footer>
    </Wrapper>
  );
};

export default SignupSideInfo;
