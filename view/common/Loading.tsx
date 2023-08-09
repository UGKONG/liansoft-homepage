import styled from "styled-components";
import { FcSynchronize } from "react-icons/fc";

export default function Loading() {
  return (
    <Container>
      <Icon />
    </Container>
  );
}

const Container = styled.article`
  position: fixed;
  z-index: 999999999999999999999999;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000020;
`;
const Icon = styled(FcSynchronize)`
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  font-size: 60px;
  animation: rotate infinite 0.8s;
`;
