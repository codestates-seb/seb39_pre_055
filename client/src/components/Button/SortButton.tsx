import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  button {
    height: 35px;
    padding: 10px;
    color: rgb(106, 115, 124);
    background-color: white;
    border: 1px solid rgb(159, 166, 173);
    border-right: 0;
    font-size: 13px;

    &:hover {
      background-color: #f0efef;
    }

    &:focus {
      color: var(--black-700);
      background-color: var(--black-075);
    }
  }

  & > button:first-child {
    border-radius: 3px 0 0 3px;
  }

  & > button:last-child {
    border-right: 1px solid rgb(159, 166, 173);
    border-radius: 0 3px 3px 0;
  }
`;

interface Prop {
  nameList: Array<string>;
  onClick: (name: string) => void;
}

/** nameList={['Newest', 'Views']}
 * onClick={(name) => console.log(name)} 버튼의 name을 인자로 넘겨줌 (sort requst 보낼 때 필요) */
const SortButton = ({ nameList, onClick }: Prop) => {
  return (
    <Container>
      {nameList.map((name) => (
        <button
          key={name}
          type="button"
          onClick={() => onClick(name.toLowerCase())}
        >
          {name}
        </button>
      ))}
    </Container>
  );
};

export default SortButton;
