import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { backToMain, homeNavState } from "../atoms";
import HonbabSignal from "../Components/Project/HonbabSignal";
import TalkKiosk from "../Components/Project/TalkKiosk";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222;
  color: white;
`;

interface IRouteParams {
  project: string;
}
function Project() {
  const { project } = useParams<IRouteParams>();
  const setBackToMain = useSetRecoilState(backToMain);
  const setView = useSetRecoilState(homeNavState);

  useEffect(() => {
    setView(5);
  }, []);

  return (
    <Wrapper>
      <Link
        to={{ pathname: "/" }}
        style={{ textDecoration: "none", color: "white" }}
        onClick={() => setBackToMain(true)}
      >
        Back to main
      </Link>
      {project === "talk-kiosk" ? (
        <TalkKiosk />
      ) : project === "honbab-signal" ? (
        <HonbabSignal />
      ) : (
        <h1>Error: 404 - page not found!</h1>
      )}
    </Wrapper>
  );
}

export default Project;