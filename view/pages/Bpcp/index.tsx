import Container from "../../common/Container";
import banner from "../../assets/images/banner/security.jpg";
import MainBanner from "../../common/MainBanner";
import Contents from "./Contents";

const name = "리안소프트: 스마트 커뮤니티 플랫폼";
const title = "스마트 커뮤니티 플랫폼";
const subTitle = `인터넷 상에서 다양한 사용자들이 모여 정보를 공유하고 소통할 수 있는 온라인 공간입니다.
사용자들이 특정 관심사나 목적을 공유하는 그룹을 형성하고,
서로 다양한 정보와 의견을 나누며 커뮤니케이션할 수 있도록 해주는 역할을 합니다.`;

export default function Bpcp() {
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
