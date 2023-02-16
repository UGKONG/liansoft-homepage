import Container from "../../common/Container";
import banner from "../../assets/images/banner/drcare.jpg";
import MainBanner from "../../common/MainBanner";
import Contents from "./Contents";

const name = "리안소프트: 닥터케어";
const title = "닥터케어";
const subTitle = `전문적이고, 통합적인 온/오프라인 헬스케어 서비스를 제공합니다.
국내 헬스케어 분야에서의 신뢰와 업적을 바탕으로 사업 다각화를 통해
글로벌 헬스케어 선두기업을 목표로 도약하고 있습니다.`;

export default function Drcare() {
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
