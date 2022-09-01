import { MdError } from 'react-icons/md';

import { ERROR_MSG_01, ERROR_MSG_02 } from '../../../constants';
import { SCommentP, SInput, SInputWrapper, SLabel, Wrapper } from './style';

interface Prop {
  type?: 'password' | 'text'; // 필요시 추가
  label?: string;
  id: string;
  value: string;
  isError: boolean;
  errorMsg?: string;
  comment?: string;
  placeholder?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void | React.Dispatch<React.SetStateAction<string>>;
}

const DefaultInput = ({
  type = 'text',
  label,
  id,
  value,
  isError,
  errorMsg = ERROR_MSG_02,
  comment,
  placeholder,
  onChange,
}: Prop) => {
  return (
    <Wrapper isError={isError}>
      {label && <SLabel htmlFor={id}>{label}</SLabel>}
      {comment && <SCommentP>{comment}</SCommentP>}
      <SInputWrapper>
        <SInput
          type={type}
          id={id}
          value={value}
          isError={isError}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
        />
        {isError && (
          <>
            <MdError />
            <p>{errorMsg}</p>
          </>
        )}
      </SInputWrapper>
    </Wrapper>
  );
};

export default DefaultInput;
