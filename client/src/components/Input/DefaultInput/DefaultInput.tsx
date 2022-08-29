import { MdError } from 'react-icons/md';

import { SInput, SLabel, Wrapper } from './style';

interface Prop {
  label?: string;
  id: string;
  value: string;
  isError: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void | React.Dispatch<React.SetStateAction<string>>;
}

const DefaultInput = ({ label, id, value, isError, onChange }: Prop) => {
  return (
    <Wrapper isError={isError}>
      {label && <SLabel htmlFor={id}>{label}</SLabel>}
      <SInput
        type="text"
        id={id}
        value={value}
        isError={isError}
        onChange={(e) => onChange(e)}
      />
      {isError && (
        <>
          <MdError />
          <p>Title must be at least 15 characters.</p>
        </>
      )}
    </Wrapper>
  );
};

export default DefaultInput;
