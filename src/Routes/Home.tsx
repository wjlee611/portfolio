import styled from "styled-components";
import Header from "../Components/Header/Header";
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
  padding-top: 100px;
`;

function Home() {
  return (
    <Wrapper>
      <Header />
      <h1>Home</h1>
    </Wrapper>
  );
}

export default Home;
