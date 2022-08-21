import { CircleLoader } from "react-spinners";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  background-color: #333;
  transition: opacity 0.2s linear;
`;

function LoadingScreen() {
  return (
    <Wrapper>
      <CircleLoader color="#22bbff" loading speedMultiplier={1} />
    </Wrapper>
  );
}

export default LoadingScreen;
