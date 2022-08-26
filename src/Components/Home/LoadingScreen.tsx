import { CircleLoader } from "react-spinners";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { loadedAsset } from "../../atoms";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: #222;
  & > span {
    color: #22bbff;
    margin-top: 10px;
  }
`;

interface ILoadingScreen {
  status: number;
}
function LoadingScreen({ status }: ILoadingScreen) {
  const assets = useRecoilValue(loadedAsset);
  return (
    <Wrapper>
      <CircleLoader color="#22bbff" loading speedMultiplier={1} />
      <span>{status + assets * 10 + "%"}</span>
    </Wrapper>
  );
}

export default LoadingScreen;
