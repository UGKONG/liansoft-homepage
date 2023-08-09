import Container from "../../common/Container";
import banner from "../../assets/images/banner/security.jpg";
import MainBanner from "../../common/MainBanner";
import Contents from "./Contents";

const name = "리안소프트: 스마트폴 시스템";
const title = "스마트폴 시스템";
const subTitle = `인터넷과 연결되어 매 시간의 기상 정보와 환경정보를 자동으로 수집하는 수집서버, 
디스플레이를 원하는대로 설정할 수 있는 설정서버,
설정된대로 자동으로 기상정보, 환경정보 및 기타 홍보 영상들을 제공하는 스마트폴 프로그램으로 구성되어 있습니다.
스마트가로등 및 공장, 아파트 단지 등에서 쉽게 실시간 알림 디스플레이를 구성할 수 있는 솔루션입니다.`;

export default function Smartpole() {
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
