import styled from 'styled-components';

export const UserInfo = styled.aside<{ background: boolean }>`
  width: 187px;
  height: 100%;
  padding: 5px 7px;
  background-color: ${(props) => (props.background ? '#d3ebf8' : 'inherit')};
  border-radius: 3px;

  span {
    font-size: 12px;
    color: rgb(106, 115, 124);
  }
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;

  img {
    width: 32px;
    height: 32px;
    margin-right: 15px;
    border-radius: 3px;
  }
`;

export const Name = styled.div`
  font-size: 13px;
  color: #0074cc;
`;
