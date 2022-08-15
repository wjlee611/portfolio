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
  background-color: transparent;
  border: none;
  color: ${(props) => (props.isSelected ? "#1CD6CE" : "#FFFFFF")};
  margin-right: ${(props) => (props.isSelected ? "20px" : "0")};
  font-size: 20px;
  transition: color 0.3s ease-out,
    margin-right 0.3s cubic-bezier(0, 0.5, 0.5, 1);
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
        Home
      </Button>
      <Button
        id="nav_2"
        onClick={() => setCurrent(2)}
        isSelected={current === 2}
      >
        Information
      </Button>
      <Button
        id="nav_3"
        onClick={() => setCurrent(3)}
        isSelected={current === 3}
      >
        Projects
      </Button>
      <Button
        id="nav_4"
        onClick={() => setCurrent(4)}
        isSelected={current === 4}
      >
        Time Line
      </Button>
    </Wrapper>
  );
}

export default HomeNav;
