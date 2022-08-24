import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { SubMenuLi, SubMenuList } from '../MenuList/style';

const StSocials = styled(SubMenuList)`
  width: 100%;
  height: 20px;
  flex-flow: row wrap;
  /* justify-content: start; */
  column-gap: 5px;
  font-size: 0.8rem;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoints.tablet}) {
      /* flex-flow: column wrap; */
    }
  `}
`;

const BottomSubMenus = styled(SubMenuLi)`
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoints.tablet}) {
      flex-flow: column wrap;
    }
  `}
`;

const stoSocials = [
  {
    title: 'Blog',
    to: 'https://stackoverflow.blog/?blb=1',
  },
  {
    title: 'Facebook',
    to: 'https://www.facebook.com/officialstackoverflow/',
  },
  {
    title: 'Twitter',
    to: 'https://twitter.com/stackoverflow',
  },
  {
    title: 'LinkedIn',
    to: 'https://linkedin.com/company/stack-overflow',
  },
  {
    title: 'Instagram',
    to: 'https://www.instagram.com/thestackoverflow',
  },
];

const Socials = () => {
  return (
    <StSocials>
      {stoSocials.map((link, i) => (
        <BottomSubMenus key={link.title}>
          <Link to={link.to}>{link.title}</Link>
        </BottomSubMenus>
      ))}
    </StSocials>
  );
};

const SLicense = styled.p`
  display: flex;
  align-items: flex-end;
  width: 100%;
  font-size: 0.7rem;
  line-height: 1rem;
  color: var(--black-400);
`;

const License = () => {
  return (
    <SLicense>
      Site design / logo © 2022 Stack Exchange Inc; user contributions licensed
      under CC BY-SA. rev 2022.8.23.42893
    </SLicense>
  );
};

const Misc = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 200px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoints.tablet}) {
      height: 30px;
      width: 100%;
    }
  `}
`;

const Copyrights = () => {
  return (
    <Misc>
      <Socials />
      <License />
    </Misc>
  );
};

export default Copyrights;
