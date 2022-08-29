import styled from 'styled-components';

const Sidebar = styled.div`
  aside {
    width: 360px;
    margin: 0 auto;
    margin-top: 30px;
    border: 1px solid hsl(47, 65%, 84%);
    background-color: hsl(47, 83%, 91%);
    color: rgb(59, 64, 69);
    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
      0 2px 8px hsla(0, 0%, 0%, 0.05);
  }

  header {
    padding: 12px 15px;
    border-bottom: 1px solid hsl(47, 65%, 84%);
    font-size: 15px;
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

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    aside {
      width: 100%;
    }
  }
`;

const EditSidebar = () => {
  return (
    <Sidebar>
      <aside>
        <header>How to Edit</header>
        <ul>
          <li>Correct minor typos or mistakes</li>
          <li>Clarify meaning without changing it</li>
          <li>Add related resources or links</li>
          <li>Always respect the author’s intent</li>
          <li>Don’t use edits to reply to the author</li>
        </ul>
      </aside>
    </Sidebar>
  );
};

export default EditSidebar;
