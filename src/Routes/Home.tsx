import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { homeNavState } from "../atoms";
import Header from "../Components/Header/Header";
import LoadingScreen from "../Components/Home/LoadingScreen";
import MyInfo from "../Components/Home/MyInfo";
import MyMoreInfo from "../Components/Home/MyMoreInfo";
import Projects from "../Components/Home/Projects";
import TimeLine from "../Components/Home/TimeLine";
import HomeNav from "../Components/Navigator/HomeNav";
import backgroundImg from "../images/background.jpg";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;
const BG = styled.img`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;
`;

function Home() {
  const [loaded, setLoaded] = useState(false);
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
    <>
      <AnimatePresence>
        {loaded ? null : (
          <motion.div
            key="loaded"
            exit={{ opacity: 0 }}
            style={{ position: "fixed", zIndex: 10 }}
          >
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>
      <BG src={backgroundImg} alt="bg" onLoad={() => setLoaded(true)} />
      <Wrapper>
        <Header
          title={
            view === 1
              ? "DEV. WOONG"
              : view === 2
              ? "INFOMATION"
              : view === 3
              ? "PROJECTS"
              : view === 4
              ? "TIME LINE"
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
    </>
  );
}

export default Home;
