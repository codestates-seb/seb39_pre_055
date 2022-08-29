/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';

import Tag from '../../Tag/Tag';
import { HashTagContainer, HashTags, SCommentP, SLabel } from './style';

interface Prop {
  value: string;
  tagArr: Array<string>;
  marginBottom?: string;
  comment?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TagInput = ({
  value,
  tagArr,
  comment,
  placeholder,
  marginBottom = '30px',
  onChange,
  onKeyUp,
}: Prop) => {
  const [isTagsFocus, setIsTagsFocus] = useState(false);
  return (
    <>
      <SLabel htmlFor="tags">Tags</SLabel>
      {comment && <SCommentP>{comment}</SCommentP>}
      <HashTagContainer isFocus={isTagsFocus} marginBottom={marginBottom}>
        <HashTags>
          {tagArr.map((tag) => (
            <Tag key={tag} name={tag} />
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
      </HashTagContainer>
    </>
  );
};

export default TagInput;
