import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { homeNavState, loadedAsset } from "../atoms";
import Header from "../Components/Header/Header";
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
  /* overflow-y: scroll; */
  overflow: hidden;
`;
const BG = styled.img`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;
`;
const ImgAsset = styled.div`
  position: fixed;
  height: 0;
  opacity: 0;
  pointer-events: none;
`;

function Home() {
  const [loaded, setLoaded] = useRecoilState(loadedAsset);
  const view = useRecoilValue(homeNavState);

  const refInfo = useRef<null | HTMLDivElement>(null);
  const refMInfo = useRef<null | HTMLDivElement>(null);
  const refProj = useRef<null | HTMLDivElement>(null);
  const refTL = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (view === 1) refInfo.current?.scrollIntoView({ behavior: "smooth" });
      if (view === 2) refMInfo.current?.scrollIntoView({ behavior: "smooth" });
      if (view === 3) refProj.current?.scrollIntoView({ behavior: "smooth" });
      if (view === 4) refTL.current?.scrollIntoView({ behavior: "smooth" });
    }, 1);
  }, [view]);

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
              : "N/A"
          }
          assets={[InfoImg, ContactImg, GitHubImg, BlogImg, YoutubeImg]}
        />
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
