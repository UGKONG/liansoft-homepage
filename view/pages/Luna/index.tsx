import Container from "../../common/Container";
import banner from "../../assets/images/banner/security.jpg";
import MainBanner from "../../common/MainBanner";
import Contents from "./Contents";

const name = "리안소프트: 장치제어 앱";
const title = "장치제어 앱";
const subTitle = `스마트폰이나 태블릿 PC 등으로 장치를 블루투스로 연결하여
간편하게 제어하고 모니터링할 수 있는 사용자용 앱입니다.
스마트폰 등에서 제어가 가능하므로 사용자의 편의성이 크게 향상되며,
장비관리 시스템과 연계하여 장치, 장비를 효율적으로 관리, 제어할 수 있습니다.`;

export default function Luna() {
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
