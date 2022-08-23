import { Button2, Wrapper } from './style';

interface Prop {
  color: string;
}

const Button = ({ color }: Prop) => {
  return (
    <Wrapper>
      <Button2 type="button">button</Button2>
    </Wrapper>
  );
};

export default Button;
