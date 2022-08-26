import { Dispatch, SetStateAction, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Modal, useModal } from '../Modal';
import MiniMenu from '../SharedLayout/SidePanel/MiniMenu/MiniMenu';
import { HamburgerBox, Patty, PattyBox } from './style';

interface HamContainerProps {
  clicked: boolean;
  setClicked: Dispatch<SetStateAction<boolean>>;
}

const HamContainer = ({ clicked, setClicked }: HamContainerProps) => {
  const { openModal, closeModal } = useModal({
    width: '200px',
    height: '500px',
    position: { x: '0px', y: '51px' },
  });
  const { pathname } = useLocation();

  const closeMenu = () => {
    console.log('닫음');
    console.log(pathname);
    setClicked(false);
    /* setTimeout(closeModal, 2000); */
  };
  const toggleMenu = () => {
    setClicked((prev) => !prev);
    if (!clicked) {
      openModal(<MiniMenu closeMenu={closeMenu} />);
    } else {
      closeModal();
    }
  };

  return (
    <HamburgerBox onClick={toggleMenu} onBlur={closeMenu}>
      <PattyBox>
        <Patty />
        <Patty />
        <Patty />
      </PattyBox>
    </HamburgerBox>
  );
};

const Hamburger = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <Modal width="200px" height="500px" background={false} borderRadius="3px">
      <ThemeProvider theme={{ clicked }}>
        <HamContainer clicked={clicked} setClicked={setClicked} />
      </ThemeProvider>
    </Modal>
  );
};

export default Hamburger;
