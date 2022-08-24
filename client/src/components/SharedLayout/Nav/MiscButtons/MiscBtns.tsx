import { RoundButton } from '../../../Button/Templates';
import { Misc } from './style';

const MiscBtns = () => {
  return (
    <Misc>
      <RoundButton color="black" mainCode="025" hoverCode="075">
        About
      </RoundButton>
      <RoundButton color="black" mainCode="025" hoverCode="075">
        Products
      </RoundButton>
      <RoundButton color="black" mainCode="025" hoverCode="075">
        For Teams
      </RoundButton>
    </Misc>
  );
};

export default MiscBtns;
