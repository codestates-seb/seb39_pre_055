import styled from 'styled-components';

interface Prop {
  name: string;
}

const Wrapper = styled.button`
  margin: 2px;
  padding: 4.8px 6px;
  border: none;
  color: #39739d;
  background-color: #e1ecf4;
  border-radius: 3px;
  font-size: 12px;

  &:hover {
    background-color: #b9d2e6;
  }
`;

const Tag = ({ name }: Prop) => {
  return <Wrapper type="button">{name}</Wrapper>;
};

export default Tag;
