import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { backToMain, homeNavState, loadedAsset } from "../atoms";
import LoadingScreen from "../Components/Home/LoadingScreen";
import MyInfo from "../Components/Home/MyInfo";
import MyMoreInfo from "../Components/Home/MyMoreInfo";
import Projects from "../Components/Home/Projects";
import TimeLine from "../Components/Home/TimeLine";
import HomeNav from "../Components/Navigator/HomeNav";

import backgroundImg from "../images/background.jpg";
import InfoImg from "../images/linode-brands.svg";
import ContactImg from "../images/circle-nodes-solid.svg";
import GitHubImg from "../images/github.svg";
import BlogImg from "../images/blog.svg";
import YoutubeImg from "../images/youtube.svg";
import { useLocation } from "react-router-dom";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
const ContentWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  position: relative;
  scroll-snap-type: y mandatory;
  overflow: hidden;
`;
const BG = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  top: 0;
  z-index: 1;
  filter: brightness(70%);
`;
const ImgAsset = styled.div`
  position: fixed;
  height: 0;
  opacity: 0;
  pointer-events: none;
`;

function Home() {
  const [loaded, setLoaded] = useRecoilState(loadedAsset);
  const [view, setView] = useRecoilState(homeNavState);
  const btm = useRecoilValue(backToMain);
  const location = useLocation();

  const refInfo = useRef<null | HTMLDivElement>(null);
  const refMInfo = useRef<null | HTMLDivElement>(null);
  const refProj = useRef<null | HTMLDivElement>(null);
  const refTL = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    setLoaded(0);
    if (btm)
      window.history.replaceState(null, "projects", "/portfolio/#projects");
    else {
      if (location.hash === "#home") setView(1);
      else if (location.hash === "#information") setView(2);
      else if (location.hash === "#projects") setView(3);
      else if (location.hash === "#timeline") setView(4);
      else {
        window.history.replaceState(null, "projects", "/portfolio/#home");
        setView(1);
      }
    }
  }, []);

  useEffect(() => {
    if (btm) setView(3);
    setTimeout(() => {
      if (view === 1) refInfo.current?.scrollIntoView({ behavior: "smooth" });
      if (view === 2) refMInfo.current?.scrollIntoView({ behavior: "smooth" });
      if (view === 3)
        refProj.current?.scrollIntoView({ behavior: btm ? "auto" : "smooth" });
      if (view === 4) refTL.current?.scrollIntoView({ behavior: "smooth" });
    }, 1);
  }, [view, btm]);

  return (
    <Wrapper>
      <AnimatePresence>
        {loaded >= 6 ? null : (
          <motion.div
            key="loaded"
            exit={{ opacity: 0 }}
            style={{ position: "fixed", zIndex: 10 }}
          >
            <LoadingScreen status={40} />
          </motion.div>
        )}
      </AnimatePresence>
      <BG
        src={backgroundImg}
        alt="bg"
        onLoad={() => setLoaded((prev) => prev + 1)}
      />
      <ImgAsset className="Image_Assets_Preload">
        <img
          src={InfoImg}
          alt="InfoImg"
          onLoad={() => setLoaded((prev) => prev + 1)}
        />
        <img
          src={ContactImg}
          alt="ContactImg"
          onLoad={() => setLoaded((prev) => prev + 1)}
        />
        <img
          src={GitHubImg}
          alt="GitHubImg"
          onLoad={() => setLoaded((prev) => prev + 1)}
        />
        <img
          src={BlogImg}
          alt="BlogImg"
          onLoad={() => setLoaded((prev) => prev + 1)}
        />
        <img
          src={YoutubeImg}
          alt="YoutubeImg"
          onLoad={() => setLoaded((prev) => prev + 1)}
        />
      </ImgAsset>
      <ContentWrapper>
        <HomeNav />
        <div
          style={{
            width: "100%",
            position: "absolute",
            top: 0,
            zIndex: 1,
          }}
        >
          <div ref={refInfo} style={{ scrollSnapAlign: "start" }}>
            <MyInfo />
          </div>
          <div ref={refMInfo} style={{ scrollSnapAlign: "start" }}>
            <MyMoreInfo />
          </div>
          <div ref={refProj} style={{ scrollSnapAlign: "start" }}>
            <Projects />
          </div>
          <div ref={refTL} style={{ scrollSnapAlign: "start" }}>
            <TimeLine />
          </div>
        </div>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Home;
