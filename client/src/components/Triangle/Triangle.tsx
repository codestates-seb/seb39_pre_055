import styled from 'styled-components';

const Wrapper = styled.div<Prop>`
  width: 0px;
  height: 0px;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-bottom: 16px solid rgb(186, 191, 196);
  transform: rotate(${({ rotate }) => rotate});

  &:hover {
    cursor: pointer;
  }
`;

interface Prop {
  rotate?: string;
  onClick: () => void;
}

const Triangle = ({ rotate = '0', onClick }: Prop) => {
  return <Wrapper rotate={rotate} onClick={onClick} />;
};

export default Triangle;
