import styled from 'styled-components';

import { ReactComponent as Error } from '../../../../../assets/img/error.svg';
import { ReactComponent as Success } from '../../../../../assets/img/success.svg';
import {
  SContentBox,
  SContentP,
} from '../../../../../components/Accordian/style';

const SCardBox = styled(SContentBox)`
  display: flex;
  flex-flow: row nowrap;
  padding-left: 15px;
`;

const SMsgBox = styled.div`
  margin-left: -8px;
`;

const ErrorSVG = styled(Error)`
  flex: 0 0 20px;
  transform: translateY(70%);
`;

const SuccessSVG = styled(Success)`
  flex: 0 0 20px;
  transform: translateY(70%);
`;

const STitleP = styled(SContentP)`
  font-weight: bold;
  padding-bottom: 0px;
  margin-bottom: -5px;
`;

interface Props {
  errCount: number;
}

const Failed = ({ errCount }: Props) => {
  return (
    <>
      <ErrorSVG />
      <SMsgBox>
        <STitleP>Your question couldn’t be submitted</STitleP>
        <SContentP>Resolve {errCount} issues before posting</SContentP>
      </SMsgBox>
    </>
  );
};

const Confirmed = () => {
  return (
    <>
      <SuccessSVG />
      <SMsgBox>
        <STitleP>Your question is ready to publish!</STitleP>
        <SContentP>
          Our automated system checked for ways to improve your question and
          found none.
        </SContentP>
      </SMsgBox>
    </>
  );
};

const Step2Card = ({ errCount }: Props) => {
  return (
    <SCardBox>
      {errCount > 0 ? <Failed errCount={errCount} /> : <Confirmed />}
    </SCardBox>
  );
};

export default Step2Card;
