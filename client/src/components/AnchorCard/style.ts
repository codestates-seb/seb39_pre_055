import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  top: 32px;
  width: 340px;
  padding: 12px;
  background: #ffffff;
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  border-radius: 7px;
  border: var(--black-100) solid 2px;

  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 9px 11px;
    border-color: #ffffff transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: -11px;
    left: 10px;
  }

  &:before {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 10px 12px;
    border-color: var(--black-100) transparent;
    display: block;
    width: 0;
    z-index: 0;
    top: -14px;
    left: 9px;
  }

  p {
    margin-left: 2px;
    font-size: 13px;
    font-weight: 600;
  }

  input {
    padding: 8px;
    border: 1px solid var(--black-200);
    border-radius: 3px;
    font-size: 12px;

    &:focus {
      border-color: var(--blue-300);
      outline: var(--blue-100) solid 4px;
    }
  }

  span {
    margin-left: 3px;
    color: var(--black-800);
    font-weight: 400;
  }

  button {
    padding: 0;
    border: none;
    color: #0074cc;
    background-color: inherit;
    font-size: 13px;
    text-align: left;

    &:hover {
      color: #55b1f7;
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  svg {
    margin-left: 10px;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      border-color: var(--blue-300);
      border-radius: 5px;
      outline: var(--blue-100) solid 4px;
    }
  }
`;

export const FaceBook = styled(AiFillFacebook)`
  color: rgb(65, 103, 178);
`;

export const Twitter = styled(AiOutlineTwitter)`
  color: rgb(42, 163, 239);
`;
