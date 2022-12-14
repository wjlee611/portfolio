import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  & > span {
    font-size: 18px;
    color: white;
    margin-bottom: 5px;
  }
`;

export default function AA() {
  return (
    <Wrapper>
      <span>2000.06.11, 천둥번개가 몰아치는 새벽 3:45시</span>
      <span>'이'씨 집안에 3.92kg의 우량아가 태어났습니다!</span>
      <br />
      <span>
        외 할아버지가 수컷 '雄(웅)', 실을 '載(재)'로 이름을 지어주셨습니다.
      </span>
      <br />
      <span>1살 때 청진기를 잡은 이 아이는 나중에 개발자가 되게 됩니다...</span>
    </Wrapper>
  );
}
