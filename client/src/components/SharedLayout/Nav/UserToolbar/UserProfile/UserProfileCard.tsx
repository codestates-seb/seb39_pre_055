import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from 'react';

import { useAppSelector } from '../../../../../redux';
import { LogoutButton, SImg, SProfileBox, SUserNameH3 } from './style';

interface ProfileCardProps {
  setOpencard: Dispatch<SetStateAction<boolean>>;
}

const ProfileCard = ({ setOpencard }: ProfileCardProps) => {
  const { image, displayName, email } =
    useAppSelector((state) => state.user.user) || {};
  const boxRef = useRef<HTMLDivElement>(null);

  const closeCard = useCallback(
    (e: MouseEvent) => {
      if (!boxRef.current || !(e.target instanceof HTMLElement)) return;

      const isButtonClicked = e.target.className.match(/user-button/g);
      if (!boxRef.current.contains(e.target) && !isButtonClicked) {
        setOpencard(false);
      }
    },
    [setOpencard]
  );

  useEffect(() => {
    document.addEventListener('click', closeCard);

    return () => document.removeEventListener('click', closeCard);
  }, [closeCard]);

  return (
    <SProfileBox ref={boxRef} className="user-card">
      <SImg src={image} />
      <SUserNameH3>{displayName}</SUserNameH3>
      <p>{email}</p>
      <LogoutButton>Log Out</LogoutButton>
    </SProfileBox>
  );
};

export default ProfileCard;
