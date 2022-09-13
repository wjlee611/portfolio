import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { homeNavState } from "../../atoms";
import AA from "./TimeLine/AA";
import AB from "./TimeLine/AB";
import AC from "./TimeLine/AC";
import AD from "./TimeLine/AD";
import AE from "./TimeLine/AE";
import AF from "./TimeLine/AF";
import { useScroll, useSpring, motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  scroll-snap-align: start;
`;
const ScrollArea = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 calc(50% - 400px);
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;
const Block = styled.div`
  width: 100%;
`;
const HeaderWrapper = styled.div`
  width: 100%;
  height: 130px;
  color: white;
  display: flex;
  position: sticky;
  top: -100px;
`;
const ContentsWrapper = styled.div`
  width: 100%;
  min-height: 150px;
  color: white;
  display: flex;
`;
const Time = styled.div`
  width: 105px;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;
const LineWrapper = styled.div`
  width: 15px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const Content = styled.div`
  width: calc(100% - 120px);
  height: 100%;
  display: flex;
`;
const ContentH = styled(Content)`
  align-items: flex-end;
`;
const ContentC = styled(Content)`
  flex-direction: column;
  padding-top: 30px;
  padding-left: 20px;
`;
const Header = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
`;
const HeaderT = styled(Header)`
  justify-content: flex-end;
  padding-right: 10px;
  font-size: 16px;
  padding-top: 1px;
  border-right: 1px solid #22bbff;
`;
const HeaderH = styled(Header)`
  padding-left: 20px;
  padding-right: 100px;
  padding-top: 4px;
  font-size: 20px;
  font-weight: 700;
  border-left: 1px solid #22bbff;
`;

const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #22bbff;
  margin: 10px 0;
  filter: saturate(2) blur(1px);
`;
const LineH = styled.div`
  width: 2px;
  height: calc(100% - 30px);
  background-color: #22bbff;
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
`;
const LineC = styled.div`
  width: 4px;
  height: 100%;
  background-color: #22bbff;
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`;

const ScrollProgress = styled(motion.div)<{ inview: "true" | "false" }>`
  height: 95px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #22bbff44;
  transform-origin: 0%;
  opacity: ${(props) => (props.inview === "true" ? 1 : 0)};
  transition: opacity 0.2s ease-out;
`;

const Reference = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: #888;
`;

const timelineData = [
  ["2000.06", "탄생!"], // AA
  ["2014.07", "코딩 동아리 창설"], // AB
  ["2019.03", "부흥고등학교 졸업"], // AC
  ["2020.03", "첫 프로젝트 - '나의 모동숲'"], // AD
  ["2022.06", "판타스틱5 - '말하는 사이에 주문 완료!'"], // AE
  ["2022.06", "매드맥스 - '혼밥시그널'"], // AF
];

function TimeLine() {
  const view = useRecoilValue(homeNavState);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  return (
    <Wrapper id="timeline">
      <ScrollProgress
        style={{ scaleX }}
        inview={view === 4 ? "true" : "false"}
      />
      <ScrollArea className="scroll-area" ref={ref}>
        <Reference>
          ☑︎ 앞 3개의 타임라인은 서론의 성격이 강합니다. 참고 부탁드립니다.
        </Reference>
        {timelineData.map((arr, i) => (
          <Block key={i} className="block">
            <HeaderWrapper>
              <Time>
                <HeaderT>{arr[0]}</HeaderT>
              </Time>
              <LineWrapper>
                {i === 0 ? null : <LineH />}
                <Circle />
              </LineWrapper>
              <ContentH>
                <HeaderH>{arr[1]}</HeaderH>
              </ContentH>
            </HeaderWrapper>
            <ContentsWrapper>
              <Time />
              <LineWrapper>
                <LineC />
              </LineWrapper>
              <ContentC>
                {i === 0 ? (
                  <AA />
                ) : i === 1 ? (
                  <AB />
                ) : i === 2 ? (
                  <AC />
                ) : i === 3 ? (
                  <AD />
                ) : i === 4 ? (
                  <AE />
                ) : i === 5 ? (
                  <AF />
                ) : null}
              </ContentC>
            </ContentsWrapper>
          </Block>
        ))}
        <Block key={"today"} className="block">
          <HeaderWrapper>
            <Time>
              <HeaderT
                style={{
                  borderRight: "1px solid gold",
                }}
              >{`${year}.${("00" + month).slice(-2)}.${day}`}</HeaderT>
            </Time>
            <LineWrapper>
              <LineH
                style={{
                  background: "linear-gradient(#22bbff 70%, gold 90%)",
                }}
              />
              <Circle style={{ backgroundColor: "gold" }} />
            </LineWrapper>
            <ContentH>
              <HeaderH
                style={{
                  borderLeft: "1px solid gold",
                }}
              >
                ...그리고 오늘
              </HeaderH>
            </ContentH>
          </HeaderWrapper>
          <ContentsWrapper>
            <Time />
            <LineWrapper>
              <LineC style={{ backgroundColor: "gold" }} />
            </LineWrapper>
            <ContentC>
              <span>방문해 주셔서 감사합니다!</span>
            </ContentC>
          </ContentsWrapper>
        </Block>
      </ScrollArea>
    </Wrapper>
  );
}

export default TimeLine;
