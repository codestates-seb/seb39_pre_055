import { HideableList, MiscLink, MiscUList, Products } from './style';

const MiscLinks = () => {
  return (
    <MiscUList>
      <HideableList>
        <MiscLink to="/">About</MiscLink>
      </HideableList>
      <Products>
        <MiscLink to="/">Products</MiscLink>
      </Products>
      <HideableList>
        <MiscLink to="/">For Teams</MiscLink>
      </HideableList>
    </MiscUList>
  );
};

export default MiscLinks;
