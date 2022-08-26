import { Hideable, Misc, Products } from './style';

const MiscBtns = () => {
  return (
    // TODO: 로그인 상태에 따라 안 보이게 설정
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
