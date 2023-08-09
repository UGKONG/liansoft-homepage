import Container from "../../common/Container";
import banner from "../../assets/images/banner/security.jpg";
import MainBanner from "../../common/MainBanner";
import Contents from "./Contents";

const name = "리안소프트: 장비관리 시스템";
const title = "장비관리 시스템";
const subTitle = `장비들을 효율적으로 관리하고 유지보수하기위한 시스템입니다.
장비의 구매, 설치, 유지보수, 수리, 교체, 폐기 등 전 과정에서 발생하는 데이터를 수집하고 관리할 수 있습니다.
또한 장비의 성능, 상태, 위치 등을 실시간으로 수집하여 장비의 현재 운용내용이나 상태를 모니터링 할 수 있으며, 장비 관리가 시급한 사항에 대해서는 푸쉬 알림을 통하여 즉각적으로 조치할 수 있습니다.
장비의 안전한 운영과 유지보수, 효율적인 관리를 위해서 반드시 필요한 시스템입니다.`;

export default function Feagle() {
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
