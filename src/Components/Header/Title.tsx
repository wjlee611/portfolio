import { useEffect, useState } from "react";
import styled from "styled-components";
import Canvas from "../../script/titleCanvas";

const CanvasWrapper = styled.canvas<{ opa: number }>`
  width: 400px;
  height: 100px;
  opacity: ${(props) => props.opa};
  transition: opacity 0.2s linear;
`;

interface ITitle {
  title: string;
}
function Title({ title }: ITitle) {
  const [opa, setOpa] = useState(1);
  useEffect(() => {
    Canvas();
  }, []);
  useEffect(() => {
    setOpa(0);
    document.querySelector<any>("#copy").value = title;
    setTimeout(() => {
      setOpa(1);
    }, 200);
    return () => {
      setOpa(0);
    };
  }, [title]);
  return <CanvasWrapper opa={opa} id="scene"></CanvasWrapper>;
}

export default Title;
