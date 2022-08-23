import { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Title from "./Title";

// import InfoImg from "../../images/linode-brands.svg";
// import ContactImg from "../../images/circle-nodes-solid.svg";
// import GitHubImg from "../../images/github.svg";
// import BlogImg from "../../images/blog.svg";
// import YoutubeImg from "../../images/youtube.svg";

const Wrapper = styled.div`
  width: 100vw;
  height: 100px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 4;
  backdrop-filter: blur(5px);
`;
const ListWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 50px;
  z-index: 5;
`;
const Button = styled.button<{ isSelected: boolean }>`
  width: 70px;
  height: 70px;
  background-color: transparent;
  border: none;
  position: relative;
  & > img {
    width: 30px;
    height: 30px;
    filter: ${(props) =>
      props.isSelected
        ? "invert(68%) sepia(27%) saturate(6010%) hue-rotate(169deg) brightness(101%) contrast(104%)"
        : "invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)"};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${(props) =>
      props.isSelected ? "translate(-50%, -70%)" : "translate(-50%, -50%)"};
    transition: transform 0.2s ease-out;
  }
  & > h1 {
    width: 70px;
    color: ${(props) => (props.isSelected ? "#22bbff" : "#ffffff")};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${(props) =>
      props.isSelected ? "translate(-50%, 50%)" : "translate(-50%, -50%)"};
    opacity: ${(props) => (props.isSelected ? 1 : 0)};
    transition: opacity 0.2s ease-out, transform 0.2s ease-out,
      color 0.2s ease-out;
  }
  &:hover > img {
    transform: translate(-50%, -70%);
  }
  &:hover > h1 {
    opacity: 1;
    transform: translate(-50%, 50%);
  }
`;

const DialogWrapper = styled(motion.div)`
  background-color: #22bbff55;
  color: white;
  position: fixed;
  z-index: 5;
  right: 50px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
`;
const SiteInfoWrapper = styled(DialogWrapper)`
  width: 300px;
  & > * {
    margin-top: 5px;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  & > a {
    margin-left: 10px;
    margin-bottom: 10px;
    text-decoration: none;
    color: #88eeff;
  }
  & > span:nth-last-child(1),
  & > span:nth-last-child(2),
  & > span:nth-last-child(3),
  & > span:nth-last-child(4) {
    margin-left: 10px;
    color: #88eeff;
  }
  & > span:nth-last-child(2) {
    margin-left: 60px;
  }
`;
const LinkWrapper = styled(DialogWrapper)`
  width: 70px;
  & > a {
    margin-top: 5px;
  }
  & > a:first-child {
    margin: 7px 0;
  }
`;
const BackWrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 3;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.8);
  & > span {
    color: white;
    margin-bottom: 100px;
  }
`;

const LinkImage = styled.img`
  width: 50px;
  height: 50px;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
    brightness(102%) contrast(102%);
`;

interface IHeader {
  title: string;
  assets: string[];
}
function Header({ title, assets }: IHeader) {
  const [selected, setSelected] = useState(0);
  return (
    <Wrapper>
      <Title title={title} />
      <ListWrapper>
        <Button
          isSelected={selected === 1}
          onClick={() => {
            if (selected === 1) setSelected(0);
            else setSelected(1);
          }}
        >
          <img src={assets[0]} alt="info" />
          <h1>Site Info</h1>
        </Button>
        <Button
          isSelected={selected === 2}
          onClick={() => {
            if (selected === 2) setSelected(0);
            else setSelected(2);
          }}
        >
          <img src={assets[1]} alt="contact" />
          <h1>Links</h1>
        </Button>
      </ListWrapper>
      <AnimatePresence>
        {selected === 1 ? (
          <SiteInfoWrapper
            key="info"
            layout="position"
            initial={{ opacity: 0, top: 80 }}
            animate={{ opacity: 1, top: 100 }}
            exit={{ opacity: 0, top: 105 }}
          >
            <span>Developed by. Woong</span>
            <a
              href="https://github.com/wjlee611/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <span>&gt; View source code @GitHub </span>
            </a>
            <span>Other Sources from</span>
            <span>- Title paricle: Mamboleoo</span>
            <span>- Font : Baloo Thambi 2, </span>
            <span>Nanum Gothic Coding</span>
            <span>- B.G. image: Hypergryph</span>
          </SiteInfoWrapper>
        ) : selected === 2 ? (
          <LinkWrapper
            key="link"
            layout="position"
            initial={{ opacity: 0, top: 80 }}
            animate={{ opacity: 1, top: 100 }}
            exit={{ opacity: 0, top: 105 }}
          >
            <a
              href="https://github.com/wjlee611"
              target="_blank"
              rel="noreferrer"
            >
              <LinkImage src={assets[2]} alt="github" />
            </a>
            <a
              href="https://with611.tistory.com/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkImage src={assets[3]} alt="blog" />
            </a>
            <a
              href="https://www.youtube.com/c/WITH611"
              target="_blank"
              rel="noreferrer"
            >
              <LinkImage src={assets[4]} alt="youtube" />
            </a>
          </LinkWrapper>
        ) : null}
        {selected === 0 ? null : (
          <BackWrapper
            key="back"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.2,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.2,
              },
            }}
            onClick={() => setSelected(0)}
          >
            <span>Click anywhere to close dialog</span>
          </BackWrapper>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

export default Header;
