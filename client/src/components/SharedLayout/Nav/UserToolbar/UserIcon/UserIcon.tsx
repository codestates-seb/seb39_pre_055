import styled from 'styled-components';

export const UserIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 100%;
  font-size: 0.8rem;
`;

const UserIcon = () => {
  return <UserIconBox>1</UserIconBox>;
};

export default UserIcon;
