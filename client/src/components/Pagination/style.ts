import styled from 'styled-components';

export const Container = styled.div`
  ul {
    display: flex;
    gap: 5px;

    & > li:first-child {
      display: none;
    }

    & > li:nth-child(2) {
      width: 50px;
    }

    & > li:nth-last-child(2) {
      width: 50px;
    }

    & > li:last-child {
      display: none;
    }

    & > li.active {
      color: white;
      border-color: #f48225;
      background-color: #f48225;
    }
  }

  li {
    width: 30px;
    height: 30px;
    border: 1px solid var(--black-100);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3b4045;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      background-color: #cecbcb;
    }
  }
`;
