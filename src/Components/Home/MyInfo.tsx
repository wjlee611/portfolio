import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  background-color: #333;
`;

function MyInfo() {
  return (
    <Wrapper>
      <h1>MyInfo</h1>
    </Wrapper>
  );
}

export default MyInfo;
