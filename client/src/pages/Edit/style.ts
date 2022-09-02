import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding: 24px;
  border-left: 1px solid rgb(227, 230, 232);
  color: #0c0d0e;
  font-size: 15px;

  h2 {
    margin-bottom: 6px;
    font-weight: 600;
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: 30px;
`;

export const EditorContainer = styled.div`
  margin-bottom: 30px;

  & > h2 {
    font-size: 15px;
  }
`;

export const TagsContainer = styled.div`
  margin-bottom: 30px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const CancelButton = styled.button`
  padding: 10px;
  margin-left: 10px;
  border: none;
  border-radius: 3px;
  background-color: inherit;
  color: var(--blue-600);
  font-size: 13px;

  &:hover {
    background-color: var(--blue-100);
    transition: all 0.2s ease-in;
  }
`;
