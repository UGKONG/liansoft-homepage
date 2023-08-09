import Container from "../../common/Container";
import banner from "../../assets/images/banner/bodyscanner.jpg";
import MainBanner from "../../common/MainBanner";
import Contents from "./Contents";

const name = "리안소프트: LSBODYSCANNER";
const title = "건강측정 솔루션 : LSBODYSCANNER";
const subTitle = `개인의 현재 몸상태를 측정하기 위한 솔루션입니다.
체형측정과 ROM 측정기능을 제공하며, 측정결과는 닥터케어유니온과 연동되어 체계적인 관리를 수행할 수 있습니다.
FMS 측정기능 및 운동처방, 운동 수행 내용 평가 등의 기능을 개발 중에 있습니다.
이를 통하여 종합적인 운동 측정/수행관리 기기로서의 면모를 갖춰나가겠습니다.`;

export default function Bodyscanner() {
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
