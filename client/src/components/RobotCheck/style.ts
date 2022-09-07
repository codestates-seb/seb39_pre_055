import styled from 'styled-components';

export const StyledInput = styled.input`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  background-color: white;
  border-radius: 0.08rem;
  outline: 2px solid var(--black-200);
  margin-right: 5px;

  &:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='hsl(140,40%,55%)' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 0;
    background-repeat: no-repeat;
    background-color: var(--black-020);
    outline: none;
  }
  &:hover {
    outline: 3px solid var(--black-300);
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

export const StyledP = styled.p`
  margin-left: 0.25rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black-050);
  border-radius: 0.3rem;
  margin: 6px 0px;
  pading: 8px 0px 2px;
  height: 156px;
  width: 268px;
`;

export const InnerContainet = styled.div`
  height: 136px;
  width: 156px;
  display: flex;
  flex-direction: column;
  background-color: var(--black-025);
  -webkit-box-shadow: 0 0 4px 1px rgb(0 0 0 / 8%);
  border: 1px solid #d3d3d3;
`;

export const IsnotRobot = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

export const RobotComment = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  margin-right: 5px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  color: var(--black-700);
  margin-top: 30px;

  span {
    font-size: 10px;
    font-weight: 400;
    margin-left: 5px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 8px;
  font-weight: 400;
  color: var(--black-700);
  margin: 5px 0px;
`;

export const Privacy = styled.a`
  margin-right: 2px;
`;

export const Terms = styled.a`
  margin-left: 2px;
`;
