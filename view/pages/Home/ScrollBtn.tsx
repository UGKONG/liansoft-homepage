import styled from "styled-components";
import { HiChevronDoubleDown } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Store } from "../../store/index.type";

export default function ScrollBtn() {
  const isTop = useSelector((x: Store) => x?.isTop);

  const onClick = (): void => {
    const height = window.innerHeight;
    window.scrollTo({ top: height - 90 });
  };

  return (
    <Button className={isTop ? "" : "center"} onClick={onClick}>
      <Icon />
    </Button>
  );
}

const Button = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #99999960;
  color: #fff;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  transition: 0.2s;
  padding-bottom: 30px;
  cursor: pointer;

  &:hover {
    background-color: #ffffff60;
    padding-bottom: 40px;
    width: 90px;
    height: 90px;

    & > svg {
      color: #fff;
      font-size: 26px;
    }
  }

  &:active {
    background-color: #ffffff80;
  }

  &.center {
    width: 50px;
    height: 50px;
    padding-bottom: 0;

    &:hover {
      padding-top: 10px;
    }
  }
`;
const Icon = styled(HiChevronDoubleDown)`
  font-size: 24px;
  color: #ccc;
`;
