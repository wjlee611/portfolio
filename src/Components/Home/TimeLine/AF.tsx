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

export default function AF() {
  return (
    <Wrapper>
      <span>(진행 중)</span>
    </Wrapper>
  );
}
