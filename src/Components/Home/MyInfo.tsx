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
  & > div > canvas {
    transform: ${(props) =>
      props.isSelected === 1
        ? "translateY(0%)"
        : props.isSelected === 2
        ? "translateY(-100%)"
        : props.isSelected === 3
        ? "translateY(-200%)"
        : "translateY(-300%)"};
    transition: transform 0.7s ease-in-out;
    will-change: transform;
  }
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

function MyInfo() {
  const view = useRecoilValue(homeNavState);
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  return (
    <Wrapper>
      <ParticleWrapper isSelected={view}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{ ...conf }}
        />
      </ParticleWrapper>
      <ContentWrapper>
        <h1>MyInfo</h1>
      </ContentWrapper>
    </Wrapper>
  );
}

export default MyInfo;
