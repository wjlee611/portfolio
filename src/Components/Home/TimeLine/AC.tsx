import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  & > span {
    font-size: 18px;
    color: white;
    margin-bottom: 5px;
  }
`;

export default function AC() {
  return (
    <Wrapper>
      <span>
        치열했던 생활을 대변하듯, 묵직해진 생활 기록부를 안고 성인이 되었습니다.
      </span>
      <br />
      <span>인생 친구도 사귈 수 있었고,</span>
      <span>하고싶은 공부를 할 수 있다는 생각에 설레었습니다.</span>
      <br />
      <span>이제 성장할 시간이 다가왔습니다...</span>
    </Wrapper>
  );
}
