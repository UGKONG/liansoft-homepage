import { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Store } from "../store/index.type";
import { BsChevronBarUp } from "react-icons/bs";

export default function ScrollTopButton() {
  const scroll = useSelector((x: Store) => x?.scroll);

  const isView = useMemo<boolean>(() => scroll > 400, [scroll]);

  const onClick = (): void => {
    window.scrollTo({ top: 0 });
  };

  return isView ? (
    <Container onClick={onClick}>
      <Icon />
    </Container>
  ) : null;
}

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 50px;
  right: 50px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0 3px 5px #00000040, 0 3px 5px #ffffff40;
  background-color: #2c3d63;
  z-index: 9999999;
  color: #fff;
  font-size: 30px;
  cursor: pointer;

  &:hover {
    background-color: #172951;
  }
`;
const Icon = styled(BsChevronBarUp)``;
