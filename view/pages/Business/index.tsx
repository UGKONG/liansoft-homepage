import Container from "../../common/Container";
import MainBanner from "../../common/MainBanner";
import banner from "../../assets/images/banner/business.jpg";
import styled from "styled-components";
import businessCircle from "../../assets/images/businessCircle.jpg";

const name = "리안소프트: 사업영역";
const title = "사업영역";
const subTitle = "사업영역 소개문구";

export default function Business() {
  return (
    <>
      <title>{name}</title>
      <Container>
        <MainBanner title={title} subTitle={subTitle} bg={banner} />
        <Wrap>
          <Image src={businessCircle} />
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
