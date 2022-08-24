import styled from 'styled-components';

const Qheader = styled.header`
  box-sizing: border-box; // FIXME: 삭제 예정
  position: relative;
  display: flex;
  column-gap: 50px;
  bottom: 0px;
  height: 400px;
  width: 100vw;
  background-color: var(--black-800);
  padding: 50px 80px;
`;

const Header = () => {
  return (
    <h1>
      <Qheader />
    </h1>
  );
};

export default Header;
