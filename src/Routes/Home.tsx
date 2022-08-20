import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { homeNavState } from "../atoms";
import Header from "../Components/Header/Header";
import MyInfo from "../Components/Home/MyInfo";
import MyMoreInfo from "../Components/Home/MyMoreInfo";
import Projects from "../Components/Home/Projects";
import TimeLine from "../Components/Home/TimeLine";
import HomeNav from "../Components/Navigator/HomeNav";

import backgroundImg from "../images/background.jpg";

const Load = styled.div<{ loaded: boolean }>`
  width: 100vw;
  height: 100vh;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  transition: opacity 0.3s linear;
`;
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;
const BG = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImg});
  background-size: cover;
  position: fixed;
  top: 0;
  z-index: 1;
`;

function Home() {
  const view = useRecoilValue(homeNavState);
  const refInfo = useRef<null | HTMLDivElement>(null);
  const refMInfo = useRef<null | HTMLDivElement>(null);
  const refProj = useRef<null | HTMLDivElement>(null);
  const refTL = useRef<null | HTMLDivElement>(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (view === 1) refInfo.current?.scrollIntoView({ behavior: "smooth" });
    if (view === 2) refMInfo.current?.scrollIntoView({ behavior: "smooth" });
    if (view === 3) refProj.current?.scrollIntoView({ behavior: "smooth" });
    if (view === 4) refTL.current?.scrollIntoView({ behavior: "smooth" });
  }, [view]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Load loaded={loaded}>
      <BG />
      <Wrapper>
        <Header
          title={
            view === 1
              ? "Dev. Woong"
              : view === 2
              ? "Information"
              : view === 3
              ? "Projects"
              : view === 4
              ? "Time Line"
              : ""
          }
        />
        <HomeNav />
        <div style={{ width: "100%", position: "absolute", top: 0, zIndex: 1 }}>
          <div ref={refInfo}>
            <MyInfo />
          </div>
          <div ref={refMInfo}>
            <MyMoreInfo />
          </div>
          <div ref={refProj}>
            <Projects />
          </div>
          <div ref={refTL}>
            <TimeLine />
          </div>
        </div>
      </Wrapper>
    </Load>
  );
}

export default Home;
