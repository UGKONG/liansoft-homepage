import { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Store } from "../store/index.type";
import Logo from "./Logo";
import MenuList from "./MenuList";

export default function Header() {
  const isTop = useSelector((x: Store) => x?.isTop);
  const pageName = useSelector((x: Store) => x?.pageName);

  const downClassName = useMemo<string>(() => {
    if (!pageName) return !isTop ? "down" : "";
    return "down";
  }, [isTop, pageName]);

  return (
    <Container className={downClassName}>
      <Wrap>
        <NavigationBar>
          <Logo />
          <MenuList />
        </NavigationBar>
      </Wrap>
      <ScrollIndicator />
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  color: #eee;
  background-color: #ffffff05;
  transition: 0.3s;
  border-bottom: 1px solid #ffffff20;
  z-index: 9999;

  &.down,
  &:hover {
    box-shadow: 0 5px 10px #00000040;
    background-color: #ffffffee;
    height: 90px;
    border-bottom: none;

    ul {
      color: #777777;
    }
  }
`;
const Wrap = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;
const NavigationBar = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const ScrollIndicator = styled.div`
  position: fixed;
  z-index: 9;
  height: 3px;
  left: 0;
  top: 0;
  background-color: #302f4c;
  width: 0%;
`;
