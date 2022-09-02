import styled from 'styled-components';

import EditSidebar from '../Edit/EditSidebar/EditSidebar';

export const Side = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  padding-left: 20px;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const Sidebar = styled.div`
  border: 1px solid hsl(47, 65%, 84%);
  background-color: hsl(47, 83%, 91%);
  color: #525960;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);

  header {
    padding: 12px 15px;
    border-bottom: 1px solid hsl(47, 65%, 84%);
    font-size: 13px;
    font-weight: 700;
  }

  ul {
    padding: 4px 15px;
    background-color: #faf5e6;
  }

  li {
    margin: 12px 0;
    font-size: 13px;
    list-style: inside;
  }
`;
const Aside = () => {
  return (
    <Side>
      <Sidebar>
        <header>The Overflow Blog</header>
        <ul>
          <li>ideal fit for developing blockchains</li>
          <li>Environments on-demand (Ep. 479)</li>
          <li>Add related resources or links</li>
          <li>Always respect the author’s intent</li>
          <li>Don’t use edits to reply to the author</li>
        </ul>
        <header>Featured on Meta</header>
        <ul>
          <li>Student Ambassador Program</li>
          <li>Google Analytics 4 (GA4) upgrade</li>
          <li>Question Lifecycle</li>
          <li>The [option] tag is being burninated</li>
          <li>WSO2 launches, and Google Go sunsets</li>
        </ul>
      </Sidebar>
      <a href="https://www.udemy.com/" target="_blank" rel="noreferrer">
        <img
          src="https://tpc.googlesyndication.com/simgad/8943515588817423167"
          alt="udemy"
        />
      </a>
      <EditSidebar width="100%" />
    </Side>
  );
};

export default Aside;
