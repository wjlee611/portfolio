import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  scroll-snap-align: start;
  & > a {
    margin: 20px 0;
  }
`;

function Projects() {
  return (
    <Wrapper>
      <Link
        to={{ pathname: "/talk-kiosk" }}
        style={{ textDecoration: "none", color: "white" }}
      >
        말하는 사이에 주문 완료!
      </Link>
      <Link
        to={{ pathname: "/honbab-signal" }}
        style={{ textDecoration: "none", color: "white" }}
      >
        혼밥 시그널
      </Link>
    </Wrapper>
  );
}

export default Projects;
