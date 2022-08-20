import { CircleLoader } from "react-spinners";
import styled from "styled-components";

const Wrapper = styled.div<{ isDisappear: boolean }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  background-color: #333;
  opacity: ${(props) => (props.isDisappear ? 0 : 1)};
  transition: opacity 0.2s linear;
`;

interface ILoadingScreen {
  isDisappear: boolean;
}
function LoadingScreen({ isDisappear }: ILoadingScreen) {
  return (
    <Wrapper isDisappear={isDisappear}>
      <CircleLoader color="#22bbff" loading speedMultiplier={1} />
    </Wrapper>
  );
}

export default LoadingScreen;
