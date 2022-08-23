import styled from "styled-components";
import Sticky from "react-sticky-el";
import { useRecoilValue } from "recoil";
import { homeNavState } from "../../atoms";
import AA from "./TimeLine/AA";
import AB from "./TimeLine/AB";
import AC from "./TimeLine/AC";
import AD from "./TimeLine/AD";
import AE from "./TimeLine/AE";
import AF from "./TimeLine/AF";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  scroll-snap-align: start;
`;
const ScrollArea = styled.div<{ inView: boolean }>`
  width: 800px;
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transition: opacity 0.2s ease-out;
`;
const Block = styled.div`
  width: 100%;
`;
const HeaderWrapper = styled.div`
  width: 100%;
  height: 130px;
  color: white;
  display: flex;
`;
const ContentsWrapper = styled.div`
  width: 100%;
  min-height: 200px;
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
  padding-top: 10px;
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
  padding-bottom: 1px;
`;
const HeaderH = styled(Header)`
  padding-left: 10px;
  padding-right: 100px;
  padding-top: 2px;
  font-size: 24px;
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

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();

  return (
    <Wrapper id="timeline">
      <ScrollArea className="scroll-area" inView={view === 4}>
        {timelineData.map((arr, i) => (
          <Block key={i} className="block">
            <Sticky
              scrollElement=".scroll-area"
              boundaryElement=".block"
              positionRecheckInterval={1}
              topOffset={-1}
            >
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
            </Sticky>
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
          <Sticky
            scrollElement=".scroll-area"
            boundaryElement=".block"
            positionRecheckInterval={1}
            topOffset={-1}
          >
            <HeaderWrapper>
              <Time>
                <HeaderT>{`${year}.${("00" + month).slice(
                  -2
                )}.${day}`}</HeaderT>
              </Time>
              <LineWrapper>
                <LineH />
                <Circle style={{ backgroundColor: "gold" }} />
              </LineWrapper>
              <ContentH>
                <HeaderH>...그리고 오늘</HeaderH>
              </ContentH>
            </HeaderWrapper>
          </Sticky>
          <ContentsWrapper>
            <Time />
            <LineWrapper>
              <LineC style={{ backgroundColor: "gold" }} />
            </LineWrapper>
            <ContentC>
              <span>어제보다 더 나은 내가 되었기를</span>
            </ContentC>
          </ContentsWrapper>
        </Block>
      </ScrollArea>
    </Wrapper>
  );
}

export default TimeLine;
