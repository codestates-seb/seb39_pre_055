import {
  SContentBox,
  SContentP,
} from '../../../../../components/Accordian/style';
import { SExplaneP, SLink } from './style';

const NonProgCard = () => {
  return (
    <SContentBox>
      <SContentP as="div">
        <SLink href="https://superuser.com/help/on-topic">Super user</SLink>
        <SExplaneP>Troubleshooting hardware and software issues</SExplaneP>
        <br />
        <SLink href="https://softwareengineering.stackexchange.com/">
          Software engineering
        </SLink>
        <SExplaneP>
          For software development methods and process questions
        </SExplaneP>
        <br />
        <SLink href="https://hardwarerecs.stackexchange.com/help/on-topic">
          Hardware recommendations
        </SLink>
        <SExplaneP>
          Software recommendations Ask questions about the site on{' '}
          <SLink href="https://meta.stackoverflow.com/">meta</SLink>
        </SExplaneP>
      </SContentP>
    </SContentBox>
  );
};

export default NonProgCard;
