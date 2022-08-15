import { useRecoilState } from "recoil";
import styled from "styled-components";
import { homeNavState } from "../../atoms";

const Wrapper = styled.div`
  width: 150px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
`;
const Button = styled.button<{ isSelected: boolean }>`
  width: 150px;
  height: 30px;
  background-color: transparent;
  border: none;
  color: ${(props) => (props.isSelected ? "#22bbff" : "#FFFFFF")};
  margin-right: ${(props) => (props.isSelected ? "20px" : "0")};
  font-size: 20px;
  transition: color 0.3s ease-out,
    margin-right 0.3s cubic-bezier(0, 0.5, 0.5, 1);
  position: relative;
  & > span {
    width: 150px;
    height: 30px;
    display: flex;
    justify-content: ${(props) =>
      props.isSelected ? "flex-start" : "flex-end"};
    align-items: center;
    padding-right: 10px;
    padding-left: 20px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }
  &:hover > div {
    width: 170px;
  }
  & > div {
    width: ${(props) => (props.isSelected ? "170px" : "0")};
    transition: width 0.3s cubic-bezier(0, 0.5, 0.5, 1);
  }
`;
const BtnBG = styled.div`
  width: 170px;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  right: -20px;
  background: linear-gradient(90deg, #22bbff 1%, #00000077 5%);
  z-index: 1;
`;

function HomeNav() {
  const [current, setCurrent] = useRecoilState(homeNavState);
  return (
    <Wrapper>
      <Button
        id="nav_1"
        onClick={() => setCurrent(1)}
        isSelected={current === 1}
      >
        <span>Home</span>
        <BtnBG />
      </Button>
      <Button
        id="nav_2"
        onClick={() => setCurrent(2)}
        isSelected={current === 2}
      >
        <span>Information</span>
        <BtnBG />
      </Button>
      <Button
        id="nav_3"
        onClick={() => setCurrent(3)}
        isSelected={current === 3}
      >
        <span>Projects</span>
        <BtnBG />
      </Button>
      <Button
        id="nav_4"
        onClick={() => setCurrent(4)}
        isSelected={current === 4}
      >
        <span>Time Line</span>
        <BtnBG />
      </Button>
    </Wrapper>
  );
}

export default HomeNav;
