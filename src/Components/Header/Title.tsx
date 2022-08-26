import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { homeNavState } from "../../atoms";
import Canvas from "../../script/titleCanvas";

const CanvasWrapper = styled.canvas<{ opa: number }>`
  width: 400px;
  height: 100px;
  opacity: ${(props) => props.opa};
  transition: opacity 0.2s linear;
  z-index: 6;
`;

function Title() {
  const [opa, setOpa] = useState(0);
  const view = useRecoilValue(homeNavState);
  useEffect(() => {
    Canvas();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setOpa(1);
    }, 200);
    return () => {
      setOpa(0);
    };
  }, [view]);
  return <CanvasWrapper opa={opa} id="scene"></CanvasWrapper>;
}

export default Title;
