import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  background-color: #22222255;
  color: white;
  scroll-snap-align: start;
`;

function Projects() {
  return (
    <Wrapper>
      <h1>Projects</h1>
    </Wrapper>
  );
}

export default Projects;
