import styled from "styled-components";
import Title from "./Title";

import InfoImg from "../../images/linode-brands.svg";
import ContactImg from "../../images/circle-nodes-solid.svg";

const Wrapper = styled.div`
  width: 100vw;
  height: 100px;
  background-color: rgba(0, 0, 0, 0);
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
  padding-right: 50px;
`;
const Button = styled.button`
  width: 70px;
  height: 70px;
  background-color: transparent;
  border: none;
  position: relative;
  & > img {
    width: 30px;
    height: 30px;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
      brightness(102%) contrast(102%);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.2s ease-out;
  }
  & > h1 {
    width: 70px;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.2s ease-out, transform 0.2s ease-out;
  }
  &:hover > img {
    transform: translate(-50%, -70%);
  }
  &:hover > h1 {
    opacity: 1;
    transform: translate(-50%, 50%);
  }
`;

interface IHeader {
  title: string;
}
function Header({ title }: IHeader) {
  return (
    <Wrapper>
      <Title title={title} />
      <ListWrapper>
        <Button>
          <img src={InfoImg} />
          <h1>Site Info</h1>
        </Button>
        <Button>
          <img src={ContactImg} />
          <h1>Contact</h1>
        </Button>
      </ListWrapper>
    </Wrapper>
  );
}

export default Header;
