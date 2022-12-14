import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { homeNavState, inProject } from "../atoms";
import HonbapSignal from "../Components/Project/HonbapSignal";
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
  overflow: hidden;
`;

interface IRouteParams {
  project: string;
}
function Project() {
  const { project } = useParams<IRouteParams>();
  const setView = useSetRecoilState(homeNavState);
  const setInProject = useSetRecoilState(inProject);

  useEffect(() => {
    setInProject(true);
    return () => {
      setInProject(false);
    };
  }, [setInProject]);

  return (
    <Wrapper>
      <Link
        to={{ pathname: "/" }}
        style={{ textDecoration: "none", color: "white" }}
        onClick={() => setView(3)}
      >
        Back to main
      </Link>
      {project === "talk-kiosk" ? (
        <TalkKiosk />
      ) : project === "honbap-signal" ? (
        <HonbapSignal />
      ) : (
        <h1>Error: 404 - page not found!</h1>
      )}
    </Wrapper>
  );
}

export default Project;
