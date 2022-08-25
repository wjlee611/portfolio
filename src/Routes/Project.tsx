import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

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
  return (
    <Wrapper>
      <Link
        to={{ pathname: "/" }}
        style={{ textDecoration: "none", color: "white" }}
      >
        Back to main
      </Link>
      <h1>{project}</h1>
    </Wrapper>
  );
}

export default Project;
