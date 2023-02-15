import styled from "styled-components";
import SolutionViewer from "./SolutionViewer";

export default function Solution() {
  return (
    <Container>
      <Wrap>
        <Title>대표 솔루션 소개 / 안내</Title>
        <SolutionViewer />
      </Wrap>
    </Container>
  );
}

const Container = styled.section`
  background-color: #927267;
  padding: 50px 0 80px;
`;
const Wrap = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
const Title = styled.h2`
  font-size: 28px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  padding: 26px 0;
  position: relative;
  margin-bottom: 40px;

  &::after {
    content: "";
    width: 80px;
    height: 2px;
    background-color: #eee;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
