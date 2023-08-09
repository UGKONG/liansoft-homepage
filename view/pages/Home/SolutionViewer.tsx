import { useEffect, useRef } from "react";
import styled from "styled-components";
import { solutionList } from "../../../public/strings";
import SolutionItem from "./SolutionItem";

let interval: NodeJS.Timer;

export default function SolutionViewer() {
  const slideRef = useRef<HTMLUListElement>(null);

  const leftSlide = (ul: HTMLUListElement): void => {
    ul.style.transition = ".3s";
    ul.style.marginLeft = "-222px";
  };

  const rightMove = (ul: HTMLUListElement): void => {
    ul.style.transition = "none";
    ul.style.marginLeft = "0px";
    ul.appendChild(ul.children[0]);
  };

  const slide = (): void => {
    if (!slideRef.current) return;
    const ul = slideRef.current;

    leftSlide(ul);
    setTimeout(() => rightMove(ul), 500);
  };

  const init = () => {
    interval = setInterval(slide, 2000);
    return () => clearInterval(interval);
  };

  const onMouseOver = () => {
    clearInterval(interval);
  };

  const onMouseLeave = () => {
    interval = setInterval(slide, 2000);
  };

  useEffect(init, []);

  return (
    <Container onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <Gradient className="left" />
      <SolutionList ref={slideRef}>
        {solutionList.map((item) => (
          <SolutionItem key={item?.name} data={item} />
        ))}
      </SolutionList>
      <Gradient className="right" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;

  &:hover {
    & > div.left {
      left: -20%;
    }
    & > div.right {
      right: -20%;
    }
  }
`;
const SolutionList = styled.ul`
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  transition: 0.5s;
`;
const Gradient = styled.div`
  width: 20%;
  height: 100%;
  position: absolute;
  top: 0;
  transition: 0.3s;
  z-index: 2;

  &.left {
    left: 0;
    background-image: linear-gradient(
      to right,
      #927267fe,
      #00000000,
      #00000000
    );
  }
  &.right {
    right: 0;
    background-image: linear-gradient(to left, #927267fe, #00000000, #00000000);
  }
`;
