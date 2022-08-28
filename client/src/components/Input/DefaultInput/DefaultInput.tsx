import { SInput, SLabel, Wrapper } from './style';

interface Prop {
  label?: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DefaultInput = ({ label, id, value, onChange }: Prop) => {
  return (
    <Wrapper>
      {label && <SLabel htmlFor={id}>{label}</SLabel>}
      <SInput type="text" id={id} value={value} onChange={(e) => onChange(e)} />
    </Wrapper>
  );
};

export default DefaultInput;
