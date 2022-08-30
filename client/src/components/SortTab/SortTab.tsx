import { useState } from 'react';
import styled, { css } from 'styled-components';

interface Prop {
  Newest: string;
  Views: string;
}

const SelectedColor = css`
  color: var(--black-700);
  background-color: var(--black-025);
`;

const Wrapper = styled.button`
  border: 0.8px solid var(--black-400);
  border-radius: 3px 0px 0px 3px;
  font-size: 6px;
  color: var(--black-500);
  background-color: white;
  :hover {
    background-color: var(--black-050);
    color: var(--black-600);
  }
  padding: 8px 7px;
`;

const Wrapper2 = styled.button`
  border: 0.8px solid var(--black-400);
  font-size: 6px;
  border-radius: 0px 3px 3px 0px;
  color: var(--black-500);
  background-color: white;
  :hover {
    background-color: var(--black-050);
  
`;

const SortTab = ({ Newest, Views }: Prop) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <Wrapper type="button" onClick={handleClick}>
        {Newest}
      </Wrapper>
      <Wrapper2 type="button" onClick={handleClick}>
        {Views}
      </Wrapper2>
    </>
  );
};

export default SortTab;
