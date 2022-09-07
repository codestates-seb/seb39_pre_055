import { Footer, GetTeams, Info1, Info2, Info3, Info4, Wrapper } from './style';

const SignupSideInfo = () => {
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
            window.open(
              'https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up',
              '_blank'
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
