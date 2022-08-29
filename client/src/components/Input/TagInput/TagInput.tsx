/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';

import Tag from '../../Tag/Tag';

import {
  Container,
  ErrorIcon,
  ErrorMsg,
  HashTagContainer,
  SCommentP,
  SLabel
  HashTags,
} from './style';

interface Prop {
  value: string;
  tagArr: Array<string>;
  isError: boolean;
  marginBottom?: string;
  comment?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick: (name: string) => void;
}

const TagInput = ({
  value,
  tagArr,
  comment,
  placeholder,
  isError,
  marginBottom = '30px',
  onChange,
  onKeyUp,
  onClick,
}: Prop) => {
  const [isTagsFocus, setIsTagsFocus] = useState(false);
  return (
    <Container>
      <SLabel htmlFor="tags">Tags</SLabel>
      {comment && <SCommentP>{comment}</SCommentP>}
      <HashTagContainer isFocus={isTagsFocus} isError={isError} marginBottom={marginBottom}>
        <HashTags>
          {tagArr.map((tag) => (
            <Tag key={tag} name={tag} deleteButton onClick={onClick} />
          ))}
        </HashTags>
        <input
          type="text"
          id="tags"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          onKeyUp={(e) => onKeyUp(e)}
          onFocus={() => setIsTagsFocus(true)}
          onBlur={() => setIsTagsFocus(false)}
        />
        {isError && <ErrorIcon />}
      </HashTagContainer>
      {isError && (
        <ErrorMsg>
          Please enter at least one tag; see a list of popular tags.
        </ErrorMsg>
      )}
    </Container>
  );
};

export default TagInput;
