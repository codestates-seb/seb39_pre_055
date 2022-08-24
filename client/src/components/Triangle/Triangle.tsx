import styled from 'styled-components';

const Wrapper = styled.div<Prop>`
  width: 0px;
  height: 0px;
  border-bottom: 16px solid rgb(186, 191, 196);
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  transform: rotate(${({ rotate }) => rotate});

  &:hover {
    cursor: pointer;
  }
`;

interface Prop {
  rotate?: string;
}

const Triangle = ({ rotate = '0' }: Prop) => {
  return <Wrapper rotate={rotate} />;
};

export default Triangle;
