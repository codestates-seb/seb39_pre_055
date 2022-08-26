import styled from 'styled-components';

interface Prop {
  Newest: string;
  Views: string;
}

const Wrapper = styled.button`
  border: 0.8px solid var(--black-300);
  border-radius: 4px 0px 0px 4px;
  font-size: 5px;
  color: var(--fc-dark);
  background-color: var(--black-075);
  padding: 8px 7px;
`;

const Wrapper2 = styled.button`
  border: 0.8px solid var(--black-300);
  font-size: 5px;
  border-radius: 0px 4px 4px 0px;
  color: var(--black-500);
  background-color: white;
`;

const SortTab = ({ Newest, Views }: Prop) => {
  return (
    <>
      <Wrapper type="button">{Newest}</Wrapper>
      <Wrapper2 type="button">{Views}</Wrapper2>
    </>
  );
};

export default SortTab;
