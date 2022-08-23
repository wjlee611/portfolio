import styled from "styled-components";
import Sticky from "react-sticky-el";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #22222255;
  display: flex;
  justify-content: center;
  scroll-snap-align: start;
`;
const ScrollArea = styled.div`
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
`;
const Block = styled.div`
  width: 100%;
  height: 430px;
  min-height: 430px;
`;
const HeaderWrapper = styled.div`
  width: 100%;
  height: 130px;
  color: white;
  display: flex;
`;
const ContentsWrapper = styled.div`
  width: 100%;
  height: 300px;
  min-height: 300px;
  color: white;
  display: flex;
`;
const Time = styled.div`
  width: 85px;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;
const LineWrapper = styled.div`
  width: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const Content = styled.div`
  width: calc(100% - 100px);
  height: 100%;
  display: flex;
`;
const ContentH = styled(Content)`
  align-items: flex-end;
`;
const ContentC = styled(Content)`
  flex-direction: column;
  padding-left: 10px;
`;
const Header = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
`;
const HeaderT = styled(Header)`
  justify-content: flex-end;
  padding-right: 10px;
  font-size: 16px;
  padding-bottom: 1px;
`;
const HeaderH = styled(Header)`
  padding-left: 10px;
  font-size: 24px;
  padding-top: 2px;
  backdrop-filter: blur(5px);
`;

const Circle = styled.div`
  width: 13px;
  height: 13px;
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
  width: 2px;
  height: 100%;
  background-color: #22bbff;
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
`;

const timelineData = [
  ["2000.06", "탄생!"],
  ["2014.07", "코딩 동아리 창설"],
  ["2019.03", "부흥고등학교 졸업"],
  ["2020.03", "첫 프로젝트 - '나의 모동숲'"],
  ["2022.06", "판타스틱5 - 말하는 사이에 주문 완료!"],
  ["2022.06", "매드맥스 - 혼밥시그널"],
];

function TimeLine() {
  return (
    <Wrapper id="timeline">
      <ScrollArea className="scroll-area">
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
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
              </ContentC>
            </ContentsWrapper>
          </Block>
        ))}
      </ScrollArea>
    </Wrapper>
  );
}

export default TimeLine;
