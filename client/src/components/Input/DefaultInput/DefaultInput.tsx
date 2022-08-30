import { MdError } from 'react-icons/md';

import { SCommentP, SInput, SInputWrapper, SLabel, Wrapper } from './style';

interface Prop {
  label?: string;
  id: string;
  value: string;
  isError: boolean;
  comment?: string;
  placeholder?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void | React.Dispatch<React.SetStateAction<string>>;
}

const DefaultInput = ({
  label,
  id,
  value,
  isError,
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
          type="text"
          id={id}
          value={value}
          isError={isError}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
        />
        {isError && (
          <>
            <MdError />
            <p>Title must be at least 15 characters.</p>
          </>
        )}
      </SInputWrapper>
    </Wrapper>
  );
};

export default DefaultInput;
