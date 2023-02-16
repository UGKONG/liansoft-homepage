import Container from "../../common/Container";
import banner from "../../assets/images/banner/balanceplay.jpg";
import MainBanner from "../../common/MainBanner";
import Contents from "./Contents";

const name = "리안소프트: 밸런스플레이";
const title = "밸런스플레이";
const subTitle = `아동-청소년 헬스케어 플랫폼 및 운동서비스 개발 업체로 
개인의 특성(성별, 연령, 신체구성, 감각기능, 운동기능, 심리 및 기질 등)과 
ICT 기술을 이용한 건강검사 시스템을 이용하여 사용자의 개인 상태를
개선 시킬 수 있는 개인 맞춤형 서비스와 제품을 개발하고 기획하고 있습니다.`;

export default function Balanceplay() {
  return (
    <>
      <title>{name}</title>
      <Container>
        <MainBanner title={title} subTitle={subTitle} bg={banner} darkMode />
        <Contents />
      </Container>
    </>
  );
}
