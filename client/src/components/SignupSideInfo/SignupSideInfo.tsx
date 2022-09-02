import { RiQuestionnaireFill } from 'react-icons/ri';
import styled from 'styled-components';

interface Prop {
  icon: string;
  text: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--black-700);
`;

const Info1 = styled.span`
  margin-bottom: 24px;
  span {
    margin-left: 10px;
    font-size: 15px;

    RiQuestionnaireFill {
      color: blue;
    }
  }
`;

const Info2 = styled.span`
  margin-bottom: 24px;
  span {
    margin-left: 10px;
    font-size: 15px;

    RiQuestionnaireFill {
      color: blue;
    }
  }
`;

const Info3 = styled.span`
  margin-bottom: 24px;
  span {
    margin-left: 10px;
    font-size: 15px;

    RiQuestionnaireFill {
      color: blue;
    }
  }
`;

const Info4 = styled.span`
  margin-bottom: 24px;
  span {
    margin-left: 10px;
    font-size: 15px;

    RiQuestionnaireFill {
      color: blue;
    }
  }
`;

const Footer = styled.div`
  font-size: 13px;
  line-height: 17px;
`;

const GetTeams = styled.div`
  color: var(--blue-600);
`;

const SignupSideInfo = ({ icon, text }: Prop) => {
  return (
    <Wrapper>
      <Info1>
        <link
          rel="shortcut icon"
          href="https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196"
        />
        <span>Get unstuck — ask a question</span>
      </Info1>
      <Info2>
        <RiQuestionnaireFill />
        <span>Unlock new privileges like voting and commenting</span>
      </Info2>
      <Info3>
        <RiQuestionnaireFill />
        <span>Save your favorite tags, filters, and jobs</span>
      </Info3>
      <Info4>
        <RiQuestionnaireFill />
        <span>Earn reputation and badges</span>
      </Info4>
      <Footer>
        <div>
          Collaborate and share knowledge with a private group for FREE.
        </div>
        <GetTeams>
          Get Stack Overflow for Teams free for up to 50 users.
        </GetTeams>
      </Footer>
    </Wrapper>
  );
};

export default SignupSideInfo;
