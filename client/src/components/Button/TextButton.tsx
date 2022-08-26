import styled from 'styled-components';

const Button = styled.button`
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
  onClick?: () => void;
}

const TextButton = ({ name, onClick }: Prop) => {
  return (
    <Button type="button" onClick={onClick}>
      {name}
    </Button>
  );
};

export default TextButton;
