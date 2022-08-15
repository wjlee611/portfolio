import { useEffect, useState } from "react";
import styled from "styled-components";
import Canvas from "../../script/titleCanvas";

const CanvasWrapper = styled.canvas<{ opa: number }>`
  width: 400px;
  height: 100px;
  opacity: ${(props) => props.opa};
  transition: opacity 0.3s linear;
`;

interface ITitle {
  title: string;
}
function Title({ title }: ITitle) {
  const [opa, setOpa] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      Canvas(title);
      setOpa(1);
    }, 300);
    return () => {
      setOpa(0);
    };
  }, [title]);
  return <CanvasWrapper opa={opa} id="scene"></CanvasWrapper>;
}

export default Title;
