import { useState } from "react";
import styled from "styled-components";
import Title from "./Title";

const Wrapper = styled.div`
  width: 100vw;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
`;
const ListWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  background-color: yellow;
`;

function Header() {
  const [index, setIndex] = useState(1);
  return (
    <Wrapper>
      <Title title={"No." + index} />
      <ListWrapper onClick={() => setIndex((prev) => prev + 1)}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>Click me!</span>
      </ListWrapper>
    </Wrapper>
  );
}

export default Header;
