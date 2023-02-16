import { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Store } from "../store/index.type";
import Logo from "./Logo";
import MenuList from "./MenuList";

export default function Header() {
  const scroll = useSelector((x: Store) => x?.scroll);
  const pageName = useSelector((x: Store) => x?.pageName);

  const downClassName = useMemo<string>(() => {
    if (!pageName) return scroll ? "down" : "";
    return "down";
  }, [scroll, pageName]);

  const scrollPercent = useMemo<number>(() => {
    let total = document.querySelector("html")?.scrollHeight ?? 0;
    let view = total ? window.innerHeight : 0;
    let calc = total - view;
    if (calc <= 0) return 0;
    let result = (scroll / calc) * 100;
    return result;
  }, [scroll]);

  return (
    <Container className={downClassName}>
      <Wrap>
        <NavigationBar>
          <Logo />
          <MenuList />
        </NavigationBar>
      </Wrap>
      <ScrollIndicator width={scrollPercent} />
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
  justify-content: space-between;
`;
const ScrollIndicator = styled.div<{ width: number }>`
  position: fixed;
  left: 0;
  top: 0;
  width: ${(x) => String(x?.width ?? 0)}%;
  height: 3px;
  z-index: 9;
  background-color: #302f4c;
`;
