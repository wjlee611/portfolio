import styled from "styled-components";
import scratch from "../../../images/TimeLine/scratch.jpg";

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
const Img = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
  border-radius: 30px;
  border-top-left-radius: 0;
`;

export default function AB() {
  return (
    <Wrapper>
      <span>중학교 2학년, 코딩 인생이 시작되었습니다.</span>
      <br />
      <span>친구와 함께 코딩 동아리를 만들어,</span>
      <span>부원 20명과 함께 코딩을 시작했습니다.</span>
      <br />
      <Img src={scratch} alt="scratch" />
      <br />
      <span>친근하게 웃으며 움직이는 고양이를 보곤</span>
      <span>코딩이 마냥 쉽고 재미있는 줄로만 알았습니다.</span>
      <br />
      <span>Scratch는 그렇게 한 명의 학생을 이 세계로 끌어들였습니다...</span>
    </Wrapper>
  );
}
