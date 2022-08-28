/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';

import Tag from '../../Tag/Tag';
import { HashTagContainer, HashTags } from './style';

interface Prop {
  value: string;
  tagArr: Array<string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TagInput = ({ value, tagArr, onChange, onKeyUp }: Prop) => {
  const [isTagsFocus, setIsTagsFocus] = useState(false);
  return (
    <>
      <label htmlFor="tags">Tags</label>
      <HashTagContainer isFocus={isTagsFocus}>
        <HashTags>
          {tagArr.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </HashTags>
        <input
          type="text"
          id="tags"
          value={value}
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
