import { SCommentP, SInput, SLabel, Wrapper } from './style';

interface Prop {
  label?: string;
  id: string;
  value: string;
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
  comment,
  placeholder,
  onChange,
}: Prop) => {
  return (
    <Wrapper>
      {label && <SLabel htmlFor={id}>{label}</SLabel>}
      {comment && <SCommentP>{comment}</SCommentP>}
      <SInput
        type="text"
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      />
    </Wrapper>
  );
};

export default DefaultInput;
