import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
import { useRef, useState } from "react";
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
  overflow-y: scroll;
  position: relative;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  scroll-snap-align: start;
`;
const ContentsWrapper = styled.div`
  width: 600px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  color: white;
  position: relative;
`;
const ContentsAnimateWrapper = styled(motion.div)`
  position: absolute;
`;
const InfoContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 320px;
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
const Hint = styled(motion.span)`
  font-size: 16px;
  font-weight: 700;
  color: white;
  position: absolute;
  z-index: 0;
`;
const ProfileImg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-bottom: 2px solid #22bbff;
  border-radius: 150px;
  margin-bottom: 20px;
  position: absolute;
  z-index: 1;
  &:hover {
    transform: rotateZ(10deg);
  }
  transition: transform 0.2s ease-in-out;
  will-change: transform;
`;

const BackBtn = styled(motion.button)`
  width: 150px;
  height: 40px;
  background: linear-gradient(45deg, #22bbff, #3ad1fb);
  margin-bottom: 20px;
  border: none;
  border-radius: 15px;
  color: white;
  font-family: "Baloo Thambi 2", "Nanum Gothic Coding", Verdana;
  font-size: 20px;
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
const InfoAnimateWrapper = styled(motion.div)`
  width: 100%;
  height: 400px;
  padding-left: 10px;
  position: absolute;
  top: 140px;
`;
const InfoWrapper = styled.div<{ scrollBar: boolean }>`
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
    background: linear-gradient(45deg, #22bbff, #3ad1fb);
    align-items: center;
    border-radius: 10px;
    padding: 5px 0;
    margin-right: 10px;
  }
  & > span:last-child {
    font-weight: 700;
  }
`;

const ContentsWrapperVariants: Variants = {
  init: {
    transform: "translateX(-20px)",
    opacity: 0,
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
  ani: {
    transform: "translateX(0px)",
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
  exit: {
    transform: "translateX(20px)",
    opacity: 0,
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
};
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

function MyMoreInfo() {
  const [selected, setSelected] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Wrapper>
      <div
        id="inview_detector"
        style={{ position: "absolute", pointerEvents: "none" }}
        ref={ref}
      ></div>
      <AnimatePresence>
        {isClicked ? (
          <ContentsAnimateWrapper
            key="contact"
            variants={ContentsWrapperVariants}
            initial="init"
            animate="ani"
            exit="exit"
            onAnimationComplete={() => setIsAnimating(false)}
          >
            <ContentsWrapper>
              <BackBtn
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setIsClicked(false);
                  }
                }}
              >
                BACK
              </BackBtn>
              <InfoNav>
                {[1, 2].map((i) => (
                  <InfoNavBtnWrapper key={i}>
                    <button
                      onClick={() => {
                        if (!isAnimating && selected !== i) {
                          setIsAnimating(true);
                          setSelected(i);
                        }
                      }}
                    >
                      {i === 1 ? "Email Contact" : "Etc. Contacts"}
                    </button>
                    {selected === i ? (
                      <motion.div layoutId="indicator"></motion.div>
                    ) : null}
                  </InfoNavBtnWrapper>
                ))}
              </InfoNav>
              <AnimatePresence>
                {selected === 1 ? (
                  <InfoAnimateWrapper
                    key="email"
                    variants={InfoWrapperVariants}
                    initial="init"
                    animate="ani"
                    exit="exit"
                    onAnimationComplete={() => setIsAnimating(false)}
                  >
                    <SendFrom>
                      <span>Send to</span>
                      <span>wjlee611@gmail.com</span>
                    </SendFrom>
                    <EmailForm />
                  </InfoAnimateWrapper>
                ) : (
                  <InfoAnimateWrapper
                    key="etc"
                    variants={InfoWrapperVariants}
                    initial="init"
                    animate="ani"
                    exit="exit"
                    onAnimationComplete={() => setIsAnimating(false)}
                  >
                    <InfoWrapper scrollBar={false}>
                      {["Phone", "Kakao Id"].map((method) => (
                        <div key={method}>
                          <h1>{method}</h1>
                          <span>
                            {method === "Phone"
                              ? "+82 10-2124-7513"
                              : "greencreeper"}
                          </span>
                        </div>
                      ))}
                    </InfoWrapper>
                  </InfoAnimateWrapper>
                )}
              </AnimatePresence>
            </ContentsWrapper>
          </ContentsAnimateWrapper>
        ) : (
          <ContentsAnimateWrapper
            key="info"
            variants={ContentsWrapperVariants}
            initial="init"
            animate="ani"
            exit="exit"
            onAnimationComplete={() => setIsAnimating(false)}
          >
            <ContentsWrapper>
              <ProfileImg
                src={WoongImg}
                alt="profileImg"
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setIsClicked(true);
                  }
                }}
              />
              <InfoContentWrapper>
                <Hello>
                  <span>???????????? ??? ?????? ????????? ??????!</span>
                  <span></span>
                  <span>??????????????? ??????????????? ????????? ??? ?????????!</span>
                  <span>
                    ????????? ?????? ???????????? ?????? ????????? ??????????????? ????????????.
                  </span>
                  <span>
                    ????????? ???????????? ????????? ???????????? ??????????????? ????????? ?????????..!
                  </span>
                  <span></span>
                  <span>
                    ?????? ???????????? ????????? ?????? ????????????, ?????? ????????? ?????????
                    ???????????????.
                  </span>
                </Hello>
              </InfoContentWrapper>
              {isInView ? (
                <Hint
                  initial={{ top: "50px" }}
                  animate={{ top: "-20px" }}
                  transition={{ delay: 1 }}
                >
                  Click my photo to contact :&#41;
                </Hint>
              ) : null}
            </ContentsWrapper>
          </ContentsAnimateWrapper>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

export default MyMoreInfo;
