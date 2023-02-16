import Container from "../../common/Container";
import banner from "../../assets/images/banner/security.jpg";
import MainBanner from "../../common/MainBanner";
import Contents from "./Contents";

const name = "리안소프트: 보안솔루션";
const title = "보안솔루션";
const subTitle = `통합관제 시스템을 기반으로 방범 / 주차 / 출입 전반에 거쳐
모든 물리적 보안을 포괄하는 Smart-Secure System`;

export default function Security() {
  return (
    <>
      <title>{name}</title>
      <Container>
        <MainBanner title={title} subTitle={subTitle} bg={banner} />
        <Contents />
      </Container>
    </>
  );
}
