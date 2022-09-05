import styled from 'styled-components';

import Tag from './Tag';

const Container = styled.li`
  padding: 12px;
  border: 1px solid rgb(227, 230, 232);

  & > span {
    display: block;
    margin-top: 20px;
    margin-left: 2px;
    color: rgb(131, 140, 149);
    font-size: 12px;
  }
`;

interface Prop {
  name: string;
  count: number;
}

const TagCard = ({ name, count }: Prop) => {
  return (
    <Container>
      <Tag name={name} />
      <span>{count} questions</span>
    </Container>
  );
};

export default TagCard;
