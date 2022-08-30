import {
  SContentBox,
  SContentP,
} from '../../../../../components/Accordian/style';
import { SLink } from './style';

const MoreHelpfulCard = () => {
  return (
    <SContentBox>
      <SContentP>
        Find more information about{' '}
        <SLink href="https://stackoverflow.com/help/how-to-ask">
          how to ask a good question here
        </SLink>
        <br />
        <br />
        Visit the{' '}
        <SLink href="https://stackoverflow.com/help">help center</SLink>
      </SContentP>
    </SContentBox>
  );
};

export default MoreHelpfulCard;
