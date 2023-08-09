import Container from "../../common/Container";
import banner from "../../assets/images/banner/drcare.jpg";
import MainBanner from "../../common/MainBanner";
import Contents from "./Contents";

const name = "리안소프트: 닥터케어유니온";
const title = "건강관리 솔루션 : 닥터케어유니온";
const subTitle = `필라테스/피트니스 클럽용 회원관리시스템에 건강관리를 접목한 토탈케어 솔루션입니다.
INBODY 및 LSBODYSCANNER와 연동되어 회원의 건강상태를 추적관리하는 기능을 제공합니다.
센터용 회원관리 프로그램, 강사용 웹앱, 회원용 앱, 출석프로그램등으로 구성되어 있습니다.
향후 운동처방 및 운동 활동 추적 기능 등을 통하여 종합적인 운동 솔루션을 만들어 나가고자 합니다.
현재 100여개의 가맹점을 통하여 회원들의 건강을 관리하고 있습니다.`;

export default function Drcare() {
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
