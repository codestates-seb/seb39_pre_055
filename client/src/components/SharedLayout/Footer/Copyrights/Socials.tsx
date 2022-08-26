import { Link } from 'react-router-dom';

import { SocialsList, StSocialsUList } from './style';

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
    <StSocialsUList>
      {stoSocials.map((link, i) => (
        <SocialsList key={link.title}>
          <Link to={link.to}>{link.title}</Link>
        </SocialsList>
      ))}
    </StSocialsUList>
  );
};

export default Socials;
