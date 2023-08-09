import styled from "styled-components";
import KakaoMap from "../../common/Map";
import Description from "./Description";

export default function Contents() {
  return (
    <Container>
      <KakaoMap />
      <Description />
    </Container>
  );
}

const Container = styled.div`
  width: 1200px;
  z-index: 2;
  position: relative;
  background-color: #fff;
  margin: 0 auto 50px;
  display: flex;
`;
