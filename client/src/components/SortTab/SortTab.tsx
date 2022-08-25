import styled from 'styled-components';

interface Prop {
  Relevance: string;
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
  color: var(--black-500);
  background-color: white;
`;

const Wrapper3 = styled.button`
  border: 0.8px solid var(--black-300);
  font-size: 5px;
  border-radius: 0px 4px 4px 0px;
  color: var(--black-500);
  background-color: white;
`;

const SortTab = ({ Relevance, Newest, Views }: Prop) => {
  return (
    <>
      <Wrapper type="button">{Relevance}</Wrapper>
      <Wrapper2 type="button">{Newest}</Wrapper2>
      <Wrapper3 type="button">{Views}</Wrapper3>
    </>
  );
};

export default SortTab;
