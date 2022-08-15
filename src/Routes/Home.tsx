import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Header from "../Components/Header/Header";
import MyInfo from "../Components/Home/MyInfo";
import TimeLine from "../Components/Home/TimeLine";
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

function Home() {
  const [view, setView] = useState(1);
  const refInfo = useRef<null | HTMLDivElement>(null);
  const refTL = useRef<null | HTMLDivElement>(null);

  const onClickNext = () => {
    setView((prev) => {
      if (prev === 2) return 1;
      return prev + 1;
    });
  };
  const onClickPrev = () => {
    setView((prev) => {
      if (prev === 1) return 2;
      return prev - 1;
    });
  };

  useEffect(() => {
    if (view === 1) refInfo.current?.scrollIntoView({ behavior: "smooth" });
    if (view === 2) refTL.current?.scrollIntoView({ behavior: "smooth" });
  }, [view]);

  return (
    <Wrapper>
      <div style={{ position: "fixed", top: 100, right: 0 }}>
        <button onClick={onClickNext}>Next</button>
        <button onClick={onClickPrev}>Prev</button>
      </div>
      <Header
        title={view === 1 ? "Dev. Woong" : view === 2 ? "Time Line" : ""}
      />
      <div ref={refInfo}>
        <MyInfo />
      </div>
      <div ref={refTL}>
        <TimeLine />
      </div>
    </Wrapper>
  );
}

export default Home;
