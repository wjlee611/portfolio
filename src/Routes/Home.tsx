import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { homeNavState, inProject, loadedAsset } from "../atoms";
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
  const [isInProject, setInProject] = useRecoilState(inProject);
  const [isFirstTime, setIsFirstTime] = useState(true);

  const refInfo = useRef<null | HTMLDivElement>(null);
  const refMInfo = useRef<null | HTMLDivElement>(null);
  const refProj = useRef<null | HTMLDivElement>(null);
  const refTL = useRef<null | HTMLDivElement>(null);

  const titleChangeEvent = new Event("title-change");

  useEffect(() => {
    if (isFirstTime) {
      if (isInProject) {
        window.history.replaceState(null, "projects", "/portfolio/#projects");
      } else {
        if (
          window.location.hash !== "#information" &&
          window.location.hash !== "#projects" &&
          window.location.hash !== "#timeline"
        ) {
          window.history.replaceState(null, "projects", "/portfolio/#home");
        }
      }
      setIsFirstTime(false);
      setInProject(false);
      if (window.location.hash === "#home") {
        setView(1);
        refInfo.current?.scrollIntoView({
          inline: "start",
          block: "start",
        });
      }
      if (window.location.hash === "#information") {
        setView(2);
        refMInfo.current?.scrollIntoView({
          inline: "start",
          block: "start",
        });
      }
      if (window.location.hash === "#projects") {
        setView(3);
        refProj.current?.scrollIntoView({
          inline: "start",
          block: "start",
        });
      }
      if (window.location.hash === "#timeline") {
        setView(4);
        refTL.current?.scrollIntoView({
          inline: "start",
          block: "start",
        });
      }
      window.dispatchEvent(titleChangeEvent);
    }
  }, [isFirstTime, isInProject]);

  useEffect(() => {
    if (!(isFirstTime || isInProject)) {
      if (window.location.hash === "#home") {
        setView(1);
        refInfo.current?.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "start",
        });
      }
      if (window.location.hash === "#information") {
        setView(2);
        refMInfo.current?.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "start",
        });
      }
      if (window.location.hash === "#projects") {
        setView(3);
        refProj.current?.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "start",
        });
      }
      if (window.location.hash === "#timeline") {
        setView(4);
        refTL.current?.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "start",
        });
      }
      window.dispatchEvent(titleChangeEvent);
    }
  }, [window.location.hash]);

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
