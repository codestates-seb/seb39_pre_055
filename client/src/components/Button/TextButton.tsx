import styled from 'styled-components';

const Button = styled.button`
  padding: 0 10px 0 0;
  border: none;
  background-color: inherit;
  color: rgb(106, 115, 124);
  font-size: 13px;

  &:active {
    color: var(--black-200);
  }
`;

interface Prop {
  name: string;
  onClick?: (e?: any) => void;
}

const TextButton = ({ name, onClick }: Prop) => {
  return (
    <Button type="button" onClick={onClick}>
      {name}
    </Button>
  );
};

export default TextButton;
