import Container from "../../common/Container";
import MainBanner from "../../common/MainBanner";
import banner from "../../assets/images/banner/info.jpg";
import styled from "styled-components";
import infoCircle from "../../assets/images/infoCircle.jpg";

const name = "리안소프트: 회사소개";
const title = "회사소개";
const subTitle = `저희 회사는 인류의 건강과 안전을 위해 지속적으로 노력하고 있습니다.
젊은 열정과 패기, 도전적인 정신으로 우리들 자신이 평생 사용할 수 있는
시스템을 진솔한 마음으로 즐겁게 개발하고 있습니다.`;

export default function Info() {
  return (
    <>
      <title>{name}</title>
      <Container>
        <MainBanner title={title} subTitle={subTitle} bg={banner} darkMode />
        <Wrap>
          <Image src={infoCircle} />
        </Wrap>
      </Container>
    </>
  );
}

const Wrap = styled.div`
  width: 1200px;
  z-index: 2;
  position: relative;
  background-color: #fff;
  margin: 0 auto;
`;
const Image = styled.img`
  display: block;
  width: 80%;
  margin: 20px auto 50px;
`;
