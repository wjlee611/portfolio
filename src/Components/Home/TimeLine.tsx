import styled from "styled-components";
import Sticky from "react-sticky-el";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 200px;
  background-color: #22222255;
  display: flex;
  justify-content: center;
  scroll-snap-align: start;
`;
const ScrollArea = styled.div`
  width: 800px;
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;
`;
const Block = styled.div`
  width: 800px;
  height: 800px;
  background-color: red;
`;
const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: blue;
  color: white;
`;
const Contents = styled.div`
  width: 100%;
  height: 400px;
  background-color: green;
  color: white;
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
              <Header>
                {arr[0]} - {arr[1]}
              </Header>
            </Sticky>
            <Contents>asd</Contents>
          </Block>
        ))}
      </ScrollArea>
    </Wrapper>
  );
}

export default TimeLine;
