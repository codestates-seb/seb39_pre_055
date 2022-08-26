import { Hideable, Misc, Products } from './style';

const MiscBtns = () => {
  return (
    <Misc>
      <Hideable color="black" mainCode="025" hoverCode="075">
        About
      </Hideable>
      <Products color="black" mainCode="025" hoverCode="075">
        Products
      </Products>
      <Hideable color="black" mainCode="025" hoverCode="075">
        For Teams
      </Hideable>
    </Misc>
  );
};

export default MiscBtns;
