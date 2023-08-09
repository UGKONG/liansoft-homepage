import Container from "../../common/Container";
import banner from "../../assets/images/banner/balanceplay.jpg";
import MainBanner from "../../common/MainBanner";
import Contents from "./Contents";

const name = "리안소프트: 밸런스멤버쉽";
const title = "아동/청소년용 솔루션 : 밸런스멤버쉽";
const subTitle = `아동-청소년 헬스케어 플랫폼입니다.
㈜밸런스플레이와 함께 아동-청소년기의 개인의 특성(연령, 신체구성, 감각/운동/심리/기질)을
종합적으로 분석하여관리하는 시스템을 공동 개발하여 운영하고 있습니다.
ICT 기술을 이용한 건강검사 시스템으로 사용자의 개인 상태를 개선시킬 수 있는
개인 맞춤형 서비스와 제품으로 만들어나가겠습니다.`;

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
