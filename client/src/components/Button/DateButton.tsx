import styled from 'styled-components';

export const DateButtonsContainer = styled.section`
  display: flex;
  justify-content: right;
  margin-bottom: 10px;

  .clicked {
    border-bottom: 1px solid rgb(244, 130, 37);
    color: black;
    font-weight: 700;
  }

  button {
    padding: 8px 8px 10px 8px;
    border: none;
    background-color: inherit;
    color: #6a737c;
    font-size: 12px;
  }
`;

interface Prop {
  nameList: Array<string>;
  clickedName: string;
  onClick: (name: string) => void;
}

const DateButton = ({ nameList, clickedName, onClick }: Prop) => {
  return (
    <DateButtonsContainer>
      {nameList.map((name) => (
        <button
          key={name}
          type="button"
          className={clickedName === name ? 'clicked' : ''}
          onClick={() => onClick(name)}
        >
          {name}
        </button>
      ))}
    </DateButtonsContainer>
  );
};

export default DateButton;
