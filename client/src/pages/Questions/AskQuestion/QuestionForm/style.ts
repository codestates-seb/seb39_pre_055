import styled from 'styled-components';

export const SForm = styled.form`
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet}) {
    column-gap: 0px;
    width: calc(100vw - 40px);
  }
`;

export const SBox = styled.div`
  display: flex;
  flex-flow: column wrap;
  row-gap: 5px;
  margin-bottom: 10px;
`;

export const SBodySection = styled.section`
  display: flex;
  flex-flow: column;
  row-gap: 10px;
  background-color: white;
  padding: 20px;
  box-shadow: 0px 0px 3px grey;
  border-radius: 3px;
`;

export const SLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
`;

export const SCommentP = styled.p`
  font-size: 0.8rem;
  color: var(--black-600);
  margin-bottom: 7px;
`;

export const ButtonBox = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
`;
