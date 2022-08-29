import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  font-size: 15px;
  color: #0c0d0e;

  h2 {
    margin-bottom: 6px;
    font-weight: 600;
  }
`;

export const EditorContainer = styled.div`
  margin-bottom: 30px;
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
