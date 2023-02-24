import Container from "../../common/Container";
import banner from "../../assets/images/banner/security.jpg";
import MainBanner from "../../common/MainBanner";
import Contents from "./Contents";

const name = "리안소프트: 스마트 커뮤니티 플랫폼";
const title = "스마트 커뮤니티 플랫폼";
const subTitle = `-`;

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
