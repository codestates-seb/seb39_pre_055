import { Dispatch, SetStateAction, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Modal, useModal } from '../Modal';
import MiniMenu from '../SharedLayout/SidePanel/MiniMenu/MiniMenu';
import { Patty, PattyWrapper, SHamWrapper } from './style';

interface HamWrapperProps {
  clicked: boolean;
  setClicked: Dispatch<SetStateAction<boolean>>;
}

const HamWrapper = ({ clicked, setClicked }: HamWrapperProps) => {
  const { openModal, closeModal } = useModal(
    { width: '200px', height: '500px' },
    { x: '0px', y: '51px' }
  );

  const toggleMenu = () => {
    setClicked((prev) => !prev);
    if (!clicked) {
      openModal(<MiniMenu />);
    } else {
      closeModal();
    }
  };
  const closeMenu = () => {
    setClicked(false);
    closeModal();
  };

  return (
    <SHamWrapper onClick={toggleMenu} onBlur={closeMenu}>
      <PattyWrapper>
        <Patty />
        <Patty />
        <Patty />
      </PattyWrapper>
    </SHamWrapper>
  );
};

const Hamburger = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <Modal width="150px" height="150px" background={false} borderRadius="3px">
      <ThemeProvider theme={{ clicked }}>
        <HamWrapper clicked={clicked} setClicked={setClicked} />
      </ThemeProvider>
    </Modal>
  );
};

export default Hamburger;
