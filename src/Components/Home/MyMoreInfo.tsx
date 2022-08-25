import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

import WoongImg from "../../images/woong.jpeg";
import EmailForm from "./EmailForm";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  scroll-snap-align: start;
`;
const ContentsWrapper = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  color: white;
  position: relative;
  &:first-child {
    padding: 0 20px;
  }
  &:last-child {
    width: 600px;
  }
`;
const Hello = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > span {
    font-size: 16px;
    margin-top: 10px;
  }
  & > span:first-child {
    font-size: 20px;
    font-weight: 700;
    color: #22bbff;
  }
`;
const ProfileImg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-bottom: 2px solid #22bbff;
  border-radius: 150px;
  margin-bottom: 20px;
`;

const InfoNav = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
`;
const InfoNavBtnWrapper = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  & > button {
    height: 58px;
    background-color: transparent;
    border: none;
    padding: 0 20px;
    color: white;
    font-family: "Baloo Thambi 2", "Nanum Gothic Coding", Verdana;
    font-size: 16px;
  }
  & > div {
    width: 100%;
    height: 2px;
    background-color: #22bbff;
  }
`;
const InfoWrapper = styled(motion.div)`
  width: 100%;
  height: 600px;
  padding-left: 10px;
  padding-top: 20px;
  position: absolute;
  top: 60px;
`;
const DetailWrapper = styled.div<{ scrollBar: boolean }>`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: scroll;
  /* width */
  &::-webkit-scrollbar {
    width: 3px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    background: ${(props) => (props.scrollBar ? "#22bbff33" : "#22bbff00")};
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #22bbff;
  }
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #1788cc;
  }
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  & > div > h1 {
    width: fit-content;
    font-size: 16px;
    font-weight: 700;
    color: #22bbff;
    border-bottom: 1px solid #22bbff;
    padding-right: 30px;
    margin-bottom: 5px;
  }
  & > div > span {
    font-size: 24px;
  }
  & > div > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  & > div > div > span {
    font-size: 24px;
    margin-right: 50px;
  }
`;
const SendFrom = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  & > span:first-child {
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #22bbff;
    border-radius: 10px;
    padding: 5px 0;
    margin-right: 10px;
  }
  & > span:last-child {
    font-weight: 700;
  }
`;

const InfoWrapperVariants: Variants = {
  init: { transform: "translateY(-10px)", opacity: 0 },
  ani: {
    transform: "translateY(0px)",
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
  exit: {
    transform: "translateY(10px)",
    opacity: 0,
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
};

const skills = [
  ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "C", "C++"],
  ["Node.js", "React.js"],
  ["Git", "Docker", "Premiere Pro", "After Effect", "Photoshop"],
];

function MyMoreInfo() {
  const [selected, setSelected] = useState(1);
  return (
    <Wrapper>
      <ContentsWrapper>
        <ProfileImg src={WoongImg} alt="profileImg" />
        <Hello>
          <span>어제보다 더 나은 사람이 되자!</span>
          <span></span>
          <span>안녕하세요 백엔드 개발자 웅 입니다!</span>
          <span>부족한 만큼 경각심을 갖고 꾸준히 배워나가고 있습니다.</span>
          <span>하지만 웹 프론트 개발도 놓치고 싶지 않습니다..!</span>
          <span></span>
          <span>
            토이 프로젝트 만드는 것과 영상편집, 싱글 플레이 게임을 좋아합니다.
          </span>
        </Hello>
      </ContentsWrapper>
      <ContentsWrapper>
        <InfoNav>
          <AnimatePresence>
            {[1, 2, 3].map((i) => (
              <InfoNavBtnWrapper key={i}>
                <button onClick={() => setSelected(i)}>
                  {i === 1
                    ? "Email Contact"
                    : i === 2
                    ? "Etc. Contacts"
                    : "Skills"}
                </button>
                {selected === i ? (
                  <motion.div layoutId="indicator"></motion.div>
                ) : null}
              </InfoNavBtnWrapper>
            ))}
          </AnimatePresence>
        </InfoNav>
        <AnimatePresence>
          {selected === 1 ? (
            <InfoWrapper
              key="email"
              variants={InfoWrapperVariants}
              initial="init"
              animate="ani"
              exit="exit"
            >
              <SendFrom>
                <span>Send to</span>
                <span>wjlee611@gmail.com</span>
              </SendFrom>
              <EmailForm />
            </InfoWrapper>
          ) : selected === 2 ? (
            <InfoWrapper
              key="etc"
              variants={InfoWrapperVariants}
              initial="init"
              animate="ani"
              exit="exit"
            >
              <DetailWrapper scrollBar={false}>
                {["Phone", "Kakao Id"].map((method) => (
                  <div key={method}>
                    <h1>{method}</h1>
                    <span>
                      {method === "Phone" ? "+82 10-2124-7513" : "greencreeper"}
                    </span>
                  </div>
                ))}
              </DetailWrapper>
            </InfoWrapper>
          ) : (
            <InfoWrapper
              key="skill"
              variants={InfoWrapperVariants}
              initial="init"
              animate="ani"
              exit="exit"
            >
              <DetailWrapper scrollBar={true}>
                {["Programming Languages", "Frameworks", "Tools"].map(
                  (skill, idx) => (
                    <div key={skill}>
                      <h1>{skill}</h1>
                      <div>
                        {skills[idx].map((i) => (
                          <span key={i}>{i}</span>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </DetailWrapper>
            </InfoWrapper>
          )}
        </AnimatePresence>
      </ContentsWrapper>
    </Wrapper>
  );
}

export default MyMoreInfo;
