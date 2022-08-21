import styled from "styled-components";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import { conf } from "../../script/pjs-conf";
import { useRecoilValue } from "recoil";
import { homeNavState } from "../../atoms";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #33333355;
  color: white;
  position: relative;
`;
const ParticleWrapper = styled.div<{ isSelected: number }>`
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
  }
  & > div > span:last-child {
    margin-bottom: 10px;
  }
`;

function MyInfo() {
  const view = useRecoilValue(homeNavState);
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  return (
    <Wrapper>
      <ParticleWrapper isSelected={view}>
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
