import styled from 'styled-components';

const SHeader = styled.header`
  margin-bottom: 30px;
  padding: 16px;
  color: rgb(59, 64, 69);
  background-color: rgb(253, 247, 226);
  border: 1px solid rgb(230, 207, 121);
  border-radius: 3px;
  font-size: 13px;
  line-height: 17px;
`;

const EditHeader = () => {
  return (
    <SHeader>
      <p>Your edit will be placed in a queue until it is peer reviewed.</p>
      <br />
      <p>
        We welcome edits that make the post easier to understand and more
        valuable for readers. Because community members review edits, please try
        to make the post substantially better than how you found it, for
        example, by fixing grammar or adding additional resources and
        hyperlinks.
      </p>
    </SHeader>
  );
};

export default EditHeader;
