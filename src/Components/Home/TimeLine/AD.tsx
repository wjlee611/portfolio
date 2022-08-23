import styled from "styled-components";
import myacnh from "../../../images/TimeLine/myacnh.jpeg";
import myacnh_yt from "../../../images/TimeLine/myacnh_yt.png";

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
  & > a {
    display: flex;
    width: 400px;
    border-radius: 15px;
    border-top-left-radius: 0;
    border: 2px solid #22bbff88;
  }
`;
const Img = styled.img`
  width: 400px;
  border-radius: 15px;
  border-top-left-radius: 0;
`;

export default function AD() {
  return (
    <Wrapper>
      <span>
        첫 프로젝트로 당시에 유행하던 '동물의 숲'의 사전을 만들었습니다.
      </span>
      <br />
      <Img src={myacnh} alt="myacnh" />
      <br />
      <span>400명이 넘는 주민의 자료를 한글 / 영어별로 정리하고,</span>
      <span>사진을 일정한 크기로 편집하고,</span>
      <span>안드로이드 스튜디오로 앱을 빌드하고,</span>
      <span>구글 플레이 스토어에 업로드 / 업데이트 해보고,</span>
      <span>어린 아이들의 평점 태러에 대응해보고,</span>
      <span>후원금도 받아보고,</span>
      <span>...</span>
      <br />
      <span>두 달동안 힘들었지만...</span>
      <br />
      <span>이 과정에서 구글링 하는 법도 터득할 수 있었고,</span>
      <span>사용자와 소통해보며 응원과 의견을 받아볼 수 있었으며,</span>
      <span>무엇보다, 재미있었습니다.</span>
      <br />
      <a
        href="https://www.youtube.com/watch?v=0Egiz8B4eIs"
        target="_blank"
        rel="noreferrer"
      >
        <Img src={myacnh_yt} alt="myacnh_yt" />
      </a>
      <br />
      <span>위 사진을 누르시면 개발당시 녹화했던 영상을 보실 수 있습니다.</span>
    </Wrapper>
  );
}
