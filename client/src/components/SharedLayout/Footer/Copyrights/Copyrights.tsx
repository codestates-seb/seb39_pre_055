import License from './License';
import Socials from './Socials';
import { MiscBox } from './style';

const CopyrightsBox = () => {
  return (
    <MiscBox>
      <Socials />
      <License />
    </MiscBox>
  );
};

export default CopyrightsBox;
