import styled from "styled-components";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import { conf } from "../../script/pjs-conf";
import { useRecoilValue } from "recoil";
import { homeNavState } from "../../atoms";

const Wrapper = styled.div<{ inview: "true" | "false" }>`
  width: 100%;
  height: 100vh;
  color: white;
  position: relative;
  scroll-snap-align: start;
  opacity: ${(props) => (props.inview === "true" ? 1 : 0)};
  transition: opacity 0.2s ease-out;
`;
const ParticleWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  & > span,
  & > div > span {
    font-size: 64px;
    display: flex;
  }
  & > div {
    display: flex;
    align-items: flex-end;
  }
  & > div > span:first-child {
    font-size: 128px;
    font-weight: 700;
    margin-right: 20px;
    padding: 0 20px;
    padding-bottom: 20px;
    border-radius: 20px;
    border-top-left-radius: 0;
    background-color: #22bbff66;
    backdrop-filter: blur(5px);
  }
  & > div > span:last-child {
    margin-bottom: 30px;
  }
`;

function MyInfo() {
  const view = useRecoilValue(homeNavState);
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  return (
    <Wrapper inview={view === 1 ? "true" : "false"}>
      <ParticleWrapper>
        <Particles init={particlesInit} options={{ ...conf }} />
      </ParticleWrapper>
      <ContentWrapper>
        <span>Hello!</span>
        <div>
          <span>Woong</span>
          <span>is here!</span>
        </div>
      </ContentWrapper>
    </Wrapper>
  );
}

export default MyInfo;
