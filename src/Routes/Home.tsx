import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { homeNavState } from "../atoms";
import Header from "../Components/Header/Header";
import MyInfo from "../Components/Home/MyInfo";
import MyMoreInfo from "../Components/Home/MyMoreInfo";
import Projects from "../Components/Home/Projects";
import TimeLine from "../Components/Home/TimeLine";
import HomeNav from "../Components/Navigator/HomeNav";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

function Home() {
  const view = useRecoilValue(homeNavState);
  const refInfo = useRef<null | HTMLDivElement>(null);
  const refMInfo = useRef<null | HTMLDivElement>(null);
  const refProj = useRef<null | HTMLDivElement>(null);
  const refTL = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (view === 1) refInfo.current?.scrollIntoView({ behavior: "smooth" });
    if (view === 2) refMInfo.current?.scrollIntoView({ behavior: "smooth" });
    if (view === 3) refProj.current?.scrollIntoView({ behavior: "smooth" });
    if (view === 4) refTL.current?.scrollIntoView({ behavior: "smooth" });
  }, [view]);

  return (
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
    </Wrapper>
  );
}

export default Home;
